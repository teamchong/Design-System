import {
    Component,
    h,
    Prop,
    Host,
    Event,
    EventEmitter,
    Element,
    State,
    Method,
    Watch,
    VNode,
} from '@stencil/core';
import { Link, router } from '@eventstore-ui/router';
import { theme } from '@eventstore-ui/theme';
import { debounce, bigIntMin, rateLimit } from '@eventstore-ui/utils';

import type {
    ClickRow,
    ColumnGroups,
    JumpOptions,
    LoadWindow,
    SortOrder,
    TableCell,
    TableCells,
    TableSort,
} from '../types';
import { TableHeader } from '../TableHeader';
import { cellClasses } from '../utils/cellClasses';
import { autoExtract } from '../utils/autoExtract';

const MAX_TABLE_HEIGHT = 15_000_000;

/** Create a virtualized table from data. */
@Component({
    tag: 'es-table-virtualized',
    styleUrl: 'es-table-virtualized.css',
    shadow: false,
})
export class Table {
    @Element() host!: HTMLEsTableVirtualizedElement;

    /** Passed to cell renderer as `parent`. */
    @Prop() identifier: string = 'table-virtualized';
    /** Do not render header. */
    @Prop() headless: boolean = false;
    /** Header sticks to scroll parent. */
    @Prop() stickyHeader: boolean = true;
    /** Sync function for extracting the data from the row. By default, it assumes you passed an array of data as your columns. */
    @Prop() getCellData!: (key: string, index: bigint) => any;
    /** Sync function for converting an index into a key */
    @Prop() getKeyFromIndex: (index: bigint) => string = (i) => `${i}`;
    /** A record of table cell definitions. */
    @Prop() cells!: TableCells<any>;
    /** The order and keys of the cells to be rendered. If omitted, all cells will be rendered. */
    @Prop() columns?: string[];
    /** The total number of rows */
    @Prop() rowCount!: bigint;
    /** Display in a row before the first row */
    @Prop() renderBefore: () => VNode | null = () => null;
    /** Display in a row after the last row */
    @Prop() renderAfter: () => VNode | null = () => null;
    /** The size of the window to render */
    @Prop() windowSize: bigint = 100n;
    /** Groups rows into blocks */
    @Prop() blockSize: bigint = 10n;
    /** The size of the grid rows before starting a reflow */
    @Prop() reflowSize: bigint = 1000n;
    /** A function to calculate a href from the cell data. */
    @Prop() linkRowTo?: (row: any) => string;
    /** The height (in pixels) of the row */
    @Prop() rowHeight: number = 50;
    /** The height (in pixels) of the header */
    @Prop() headerHeight: number = 52;
    /** The height (in pixels) of the before */
    @Prop() beforeHeight: number = 0;
    /** The height (in pixels) of the after */
    @Prop() afterHeight: number = 0;
    /** If rows should be allowed to take focus */
    @Prop() rowTakesFocus?: boolean;
    /** A function to calculate the class or classes of the row from the cellData. */
    @Prop() rowClass: (
        row: any,
        key: string,
        index: bigint,
    ) => Record<string, boolean> | string | undefined = () => undefined;
    /** How the table is sorted */
    @Prop() sort?: TableSort;
    /** If the table should lock scroll on appending events */
    @Prop() scrollLock?: boolean;

    /** Triggered whenever a row is clicked. The `detail` is the item in the row array. */
    @Event() clickRow!: EventEmitter<ClickRow>;
    /** Triggered whenever a sortable header is clicked */
    @Event() clickSort!: EventEmitter<string>;
    /** Triggered when a window is rendered */
    @Event() loadWindow!: EventEmitter<LoadWindow>;
    /** Triggered when the last window is scrolled to */
    @Event() lastWindow!: EventEmitter<void>;
    /** Triggered when the first window is scrolled to */
    @Event() firstWindow!: EventEmitter<void>;

    /** The first row being rendered */
    @State() trailingEdge: bigint = 0n;
    /** Which row to start the reflow from */
    @State() reflowRow: bigint = 0n;
    /** The distance (in pixels) "warp" the scrollbar */
    @State() warp: number = 0;
    /** Which row to hightlight on jump */
    @State() jumpHighlight: string | null = null;
    /** Invert row banding, to prevent flashing */
    @State() invertBanding: boolean = false;

    private initial!: string;
    private headerRows!: bigint;
    private resizeObserver = new ResizeObserver(() => this.handleResize());
    private scrollParent!: Element;
    private jumpHighlightTimeout!: ReturnType<typeof setTimeout>;

    componentWillLoad() {
        this.scrollParent = this.getScrollParent();
        window.addEventListener('scroll', this.handleScroll, {
            passive: true,
        });
        this.resizeObserver.observe(this.host);
        this.headerRows = this.calcHeaderRows();
        this.initial = this.getKeyFromIndex(0n);
        this.trailingEdgeChange(this.trailingEdge);
    }

    disconnectedCallback() {
        window.removeEventListener('scroll', this.handleScroll);
        this.resizeObserver.disconnect();
        this.handleScroll.clear();
        this.applyWarp.clear();
        clearTimeout(this.jumpHighlightTimeout);
    }

    @Watch('jumpHighlight')
    jumpHighlightChange(key: string) {
        clearTimeout(this.jumpHighlightTimeout);
        this.jumpHighlightTimeout = setTimeout(() => {
            if (this.jumpHighlight === key) {
                this.jumpHighlight = null;
            }
        }, 2000);
    }

    @Watch('sort')
    sortChange(from: SortOrder, to: SortOrder) {
        if (from?.[0] === to?.[0] && from?.[1] === to?.[1]) return;
        this.trailingEdgeChange(this.trailingEdge);
    }

    private prependCount?: bigint;

    @Watch('rowCount')
    rowCountChange(next: bigint, previous: bigint) {
        const initial = this.getKeyFromIndex(0n);

        if (initial !== this.initial) {
            this.initial = initial;
            const difference = next - previous;

            if (difference % 2n !== 0n) {
                this.invertBanding = !this.invertBanding;
            }

            if (this.scrollLock) {
                this.prependCount = difference;

                if (
                    this.scrollParent.scrollHeight >
                    this.scrollParent.clientHeight +
                        this.scrollParent.scrollTop +
                        Number(this.prependCount) * this.rowHeight
                ) {
                    this.applyScrollLock();
                }
            }
        }

        this.trailingEdgeChange(this.trailingEdge);
    }

    @Watch('trailingEdge')
    trailingEdgeChange(trailingEdge: bigint) {
        const to = bigIntMin(trailingEdge + this.windowSize, this.rowCount);
        this.loadWindow.emit({
            from: trailingEdge,
            to,
            count: to - trailingEdge,
        });

        if (trailingEdge <= 0n) {
            this.firstWindow.emit();
        }

        if (to >= this.rowCount) {
            this.lastWindow.emit();
        }
    }

    /** Jump to the passed row, with smooth scroll and highlight, if specified. */
    @Method()
    async jumpToRow(
        index: bigint,
        { highlight = true, smooth = 'auto' }: Partial<JumpOptions> = {},
    ) {
        if (index < 0 || index > this.rowCount) {
            throw new Error(`Index is out of bounds: ${index}`);
        }
        this.internalJumpToRow(index, { highlight, smooth });
    }

    private renderRowGroup = (key: string, index: bigint) => (
        <div
            role={'rowgroup'}
            key={key}
            class={{
                odd: this.invertBanding ? index % 2n !== 0n : index % 2n === 0n,
                highlight: this.jumpHighlight === key,
            }}
        >
            {this.renderRow(key, index)}
        </div>
    );

    private renderRow = (key: string, index: bigint) => {
        const data = this.getCellData(key, index);

        if (this.linkRowTo) {
            return (
                <Link
                    url={this.linkRowTo(data)}
                    role={'row'}
                    key={key}
                    aria-rowindex={index}
                    class={this.rowClass(data, key, index)}
                    onClick={this.emitRowClick({ data, key, index })}
                    tabindex={'-1'}
                >
                    {this.renderCells(data, key, index)}
                </Link>
            );
        }

        return (
            <div
                role={'row'}
                aria-rowindex={index}
                key={key}
                class={this.rowClass(data, key, index)}
                onClick={this.emitRowClick({ data, key, index })}
                tabindex={'-1'}
            >
                {this.renderCells(data, key, index)}
            </div>
        );
    };

    private renderCells = (data: any, key: string, index: bigint) =>
        this.getColumnGroups().map(([_, cells], groupIndex, groups) =>
            cells.map(([name, cell], cellIndex, cells) => {
                const focusCell =
                    groupIndex === 0 &&
                    cellIndex === 0 &&
                    (!!this.rowTakesFocus || !!this.linkRowTo);

                return (
                    <div
                        role={'cell'}
                        tabindex={focusCell ? '0' : undefined}
                        onKeyDown={
                            focusCell
                                ? this.focusCellKeyPress({
                                      index: BigInt(index),
                                      key,
                                      data,
                                  })
                                : undefined
                        }
                        style={{
                            gridRowStart: `${this.calculateGridRow(index)}`,
                        }}
                        class={cellClasses(cell, data, focusCell, {
                            groupIndex,
                            groupCount: groups.length,
                            cellIndex,
                            cellCount: cells.length,
                        })}
                    >
                        {cell.cell
                            ? h(cell.cell, {
                                  key,
                                  data,
                                  parent: this.identifier,
                              })
                            : autoExtract(data, name)}
                    </div>
                );
            }),
        );

    render() {
        const fullHeight = this.fullHeight();
        const clippedHeight = Math.min(MAX_TABLE_HEIGHT, fullHeight);

        return (
            <Host
                high-contrast={theme.isHighContrast()}
                dark={theme.isDark()}
                style={{
                    height: `${clippedHeight}px`,
                    minHeight: `${clippedHeight}px`,
                }}
            >
                <div
                    role={'table'}
                    style={{
                        gridTemplateColumns: this.gridTemplateColumns(),
                        gridTemplateRows: this.gridTemplateRows(),
                        top: `${
                            Number(this.reflowRow) * this.rowHeight - this.warp
                        }px`,
                    }}
                >
                    <TableHeader
                        columnGroups={this.getColumnGroups()}
                        clickSort={this.clickSort}
                        headless={this.headless}
                        sort={this.sort}
                        sticky={this.stickyHeader}
                        headerHeight={this.headerHeight}
                    />
                    <div
                        class={'before'}
                        style={{ height: `${this.beforeHeight}px` }}
                    >
                        {h(this.renderBefore)}
                    </div>
                    {Array.from(
                        {
                            length: Number(
                                bigIntMin(this.windowSize, this.rowCount),
                            ),
                        },
                        (_, i) => {
                            const index = BigInt(i) + this.trailingEdge;
                            if (index > this.rowCount - 1n) return;
                            return this.renderRowGroup(
                                this.getKeyFromIndex(index),
                                index,
                            );
                        },
                    )}
                    <div
                        class={'after'}
                        style={{ height: `${this.afterHeight}px` }}
                    >
                        {h(this.renderAfter)}
                    </div>
                </div>
            </Host>
        );
    }

    private focusCellKeyPress = (data: ClickRow) => (e: KeyboardEvent) => {
        if (e.code !== 'Space' && e.code !== 'Enter') return;

        this.clickRow.emit(data);
        if (this.linkRowTo) {
            const link = this.linkRowTo(data);
            router.history?.push(link);
        }
    };

    private emitRowClick = (data: ClickRow) => () => {
        this.clickRow.emit(data);
    };

    private getCell = (col: string): TableCell<unknown> => {
        return this.cells[col] ?? { title: '' };
    };

    private getColumns = (): string[] => {
        if (this.columns) return this.columns;
        return Object.keys(this.cells);
    };

    private getColumnGroups = (): ColumnGroups => {
        return this.getColumns().reduce<ColumnGroups>((acc, col) => {
            const cell = this.getCell(col);
            if (cell.variant === 'exclude') return acc;
            if (acc.at(-1) != null && acc.at(-1)![0] === cell.group) {
                acc.at(-1)![1].push([col, cell]);
            } else {
                acc.push([cell.group, [[col, cell]]]);
            }
            return acc;
        }, []);
    };

    private gridTemplateColumns = () =>
        this.getColumns().reduce((acc, col) => {
            const cell = this.getCell(col);
            if (cell.variant === 'exclude') return acc;
            return `${acc} ${cell.width ?? 'auto'}`;
        }, '');

    private gridTemplateRows = () => {
        return `repeat(${this.headerRows}, ${this.headerHeight}px) [before] ${
            this.beforeHeight
        }px repeat(${this.rowCount - this.reflowRow}, ${
            this.rowHeight
        }px) [after] ${this.afterHeight}px `;
    };

    private calcHeaderRows = () => {
        if (this.headless) return 0n;
        if (this.getColumnGroups().some(([g]) => g != null)) return 2n;
        return 1n;
    };

    private getScrollParent = () => {
        const canScroll = (node: Element) => {
            const style = getComputedStyle(node, null);
            return (
                style.getPropertyValue('overflow') === 'scroll' ||
                style.getPropertyValue('overflow') === 'auto' ||
                style.getPropertyValue('overflow-y') === 'scroll' ||
                style.getPropertyValue('overflow-y') === 'auto' ||
                style.getPropertyValue('overflow-x') === 'scroll' ||
                style.getPropertyValue('overflow-x') === 'auto'
            );
        };

        const scrollParent = (node: Element): Element => {
            const parent = node.parentElement ?? node.parentNode?.parentElement;

            if (!parent) {
                return document.scrollingElement || document.documentElement;
            }

            if (canScroll(parent)) return parent;

            return scrollParent(parent);
        };

        return scrollParent(this.host);
    };

    private rowPosition = (row: bigint) => Number(row) * this.rowHeight;
    private fullHeight = () =>
        this.headerHeight +
        this.beforeHeight +
        this.rowPosition(this.rowCount) +
        this.afterHeight;

    private applyScrollLock = () => {
        if (!this.prependCount) return;
        this.scrollParent.scrollTop +=
            Number(this.prependCount) * this.rowHeight;
        delete this.prependCount;
        this.calculateWarp();
        this.calculateWindowing();
    };

    private handleResize = () => {
        this.applyScrollLock();
    };

    private previousScrollTop = 0;
    private handleScroll = rateLimit(() => {
        this.calculateWarp();
        this.calculateWindowing();
    }, 200);

    private internalScrollTop = 0;
    private warpedScrollTop = 0;
    private justWarped = false;

    private calculateWarp = () => {
        const scrollTop = this.scrollParent.scrollTop;
        const distance = scrollTop - this.previousScrollTop;
        const warpFactor = this.warpFactor(this.internalScrollTop + distance);
        this.previousScrollTop = scrollTop;

        if (this.justWarped) {
            this.justWarped = false;
        } else if (warpFactor === 1) {
            this.internalScrollTop += distance;
            this.warpedScrollTop = this.internalScrollTop;
        } else if (Math.abs(distance) > 10_000) {
            const jumpWarp = this.warpFactor(scrollTop);
            this.internalScrollTop = Math.round(scrollTop / jumpWarp);
            this.warpedScrollTop = scrollTop;
            this.warp = this.internalScrollTop - this.warpedScrollTop;
        } else {
            this.internalScrollTop += distance;
            this.warpedScrollTop = Math.round(
                this.internalScrollTop * warpFactor,
            );
            this.applyWarp();
        }
    };

    private warpFactor = (scrollTop: number) => {
        const expectedTableHeight = this.fullHeight();
        if (expectedTableHeight <= MAX_TABLE_HEIGHT) return 1;

        const actualHeight =
            this.scrollParent.scrollHeight - this.scrollParent.clientHeight;
        const expectedHeight =
            expectedTableHeight + (actualHeight - MAX_TABLE_HEIGHT);

        const distanceToEdge = Math.min(scrollTop, expectedHeight - scrollTop);

        // We don't want to warp at the edges
        if (distanceToEdge < actualHeight / 8) {
            return 1;
        }

        return actualHeight / expectedHeight;
    };

    private applyWarp = debounce(() => {
        this.justWarped = true;

        if (this.scrollParent.scrollTop === this.warpedScrollTop) {
            return;
        }

        this.scrollParent.scrollTop = this.warpedScrollTop;
        this.warp = this.internalScrollTop - this.warpedScrollTop;
    }, 1000);

    private calculateWindowing = () => {
        if (this.rowCount <= this.windowSize) return;

        const top = Math.floor(this.internalScrollTop / this.rowHeight);
        const offsetTop = Math.max(0, top - Number(this.windowSize) / 4);
        const blockTop = offsetTop - (offsetTop % Number(this.blockSize));
        const lastRow = this.rowCount;
        const lastBlock = Number(lastRow - (lastRow % this.blockSize));
        const trailingEdge = BigInt(Math.min(blockTop, lastBlock));

        if (this.trailingEdge !== trailingEdge) {
            this.trailingEdge = trailingEdge;
            this.reflowRow =
                trailingEdge - (trailingEdge % BigInt(this.reflowSize));
        }
    };

    private calculateGridRow = (index: bigint) => {
        return index + 2n + this.headerRows - this.reflowRow;
    };

    private internalJumpToRow = (
        index: bigint,
        { smooth, highlight }: JumpOptions,
    ) => {
        const fullHeight = this.fullHeight();
        const trueHeight = this.host.offsetHeight;
        const scrollHeight = this.scrollParent.scrollHeight;
        const expectedTop = this.rowPosition(index);

        const realTop = (() => {
            // no warp needed
            if (fullHeight === trueHeight) {
                return expectedTop;
            }

            // at top edge, no warp
            const topEdge = BigInt(
                Math.floor(MAX_TABLE_HEIGHT / 8 / this.rowHeight),
            );

            if (index <= topEdge) {
                return Math.max(0, expectedTop);
            }

            // at bottom edge, no warp from bottom
            const bottomEdge = this.rowCount - topEdge;
            if (index >= bottomEdge) {
                return (
                    scrollHeight -
                    (this.scrollParent.clientHeight - this.host.offsetTop) -
                    Math.max(0, fullHeight - expectedTop)
                );
            }

            // somewhere in the middle, standard warp
            return (
                expectedTop *
                ((scrollHeight - this.scrollParent.clientHeight) / fullHeight)
            );
        })();

        const distance = Math.abs(this.scrollParent.scrollTop - realTop);

        if (
            fullHeight === trueHeight &&
            smooth === 'auto' &&
            distance < Number(this.windowSize) * this.rowHeight
        ) {
            this.scrollParent.scrollTo({
                top: realTop,
                behavior: 'smooth',
            });
        } else {
            this.scrollParent.scrollTop = realTop;
            this.internalScrollTop = expectedTop;
            this.warpedScrollTop = realTop;
            this.warp = this.internalScrollTop - this.warpedScrollTop;
            this.justWarped = true;
        }

        this.calculateWindowing();

        if (highlight) {
            this.jumpHighlight = this.getKeyFromIndex(index);
        }
    };
}
