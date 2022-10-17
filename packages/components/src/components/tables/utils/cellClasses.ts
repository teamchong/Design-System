import type { TableCell } from '../types';

interface CellPosition {
    groupIndex: number;
    cellIndex: number;
    groupCount: number;
    cellCount: number;
}

export const cellClasses = (
    { variant, class: rawClasses }: TableCell<unknown>,
    data: unknown,
    focusCell: boolean,
    { groupIndex, cellIndex, groupCount, cellCount }: CellPosition,
) => {
    const variants = typeof variant === 'string' ? [variant] : variant ?? [];
    const classes =
        typeof rawClasses === 'function' ? rawClasses(data) : rawClasses;
    const extraClasses = !classes
        ? {}
        : typeof classes === 'string'
        ? { [classes]: true }
        : classes;

    return {
        no_pad: variants.includes('no-pad'),
        borderless: variants.includes('borderless'),
        centered: variants.includes('centered'),
        focusCell,
        group_first: groupIndex !== 0 && cellIndex === 0,
        group_last:
            groupIndex !== groupCount - 1 && cellIndex === cellCount - 1,
        ...extraClasses,
    };
};
