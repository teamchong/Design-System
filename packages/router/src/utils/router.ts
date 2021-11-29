import type {
    RouterHistory,
    LocationSegments,
    Router,
    RouterOptions,
} from '../types';
import { INTERNAL_ROUTER } from './globals';
import { InternalRouter } from './internalRouter';
import { logger } from './logger';

export class PublicRouter implements Router {
    private get internal() {
        if (!window[INTERNAL_ROUTER]) {
            this.init();
        }

        return window[INTERNAL_ROUTER];
    }

    public init = (options?: RouterOptions) => {
        if (window[INTERNAL_ROUTER] != null) {
            logger.warn('Router has already been initialized');
            return;
        }

        window[INTERNAL_ROUTER] = new InternalRouter(options);
    };

    public get history(): RouterHistory {
        this.internal.updateInterestedParties();
        return this.internal.history;
    }

    public get location(): LocationSegments {
        this.internal.updateInterestedParties();
        return this.internal.location;
    }

    public fillPath = (
        path: string,
        parameters?: Record<string, string>,
    ): string => {
        this.internal.updateInterestedParties();
        return this.internal.fillPath(path, parameters);
    };
}

export const router = new PublicRouter();
