import { ApifyClient } from "apify-client";
export declare const DEFAULT_APIFY_BASE_URL = "https://api.apify.com";
export declare const ALLOWED_APIFY_BASE_URL_PREFIX = "https://api.apify.com";
export declare const DEFAULT_MAX_RESULTS = 20;
export declare const MAX_RESULT_CHARS = 50000;
export declare const TERMINAL_STATUSES: Set<string>;
/** Minimal shared plugin config shape. All tools read these fields. */
export interface ApifyPluginConfig {
    enabled?: boolean;
    apiKey?: string;
    baseUrl?: string;
    maxResults?: number;
    enabledTools?: string[];
}
export declare function parsePluginConfig(raw?: Record<string, unknown>): ApifyPluginConfig;
export declare function resolveApiKey(config: ApifyPluginConfig): string | undefined;
export declare function resolveBaseUrl(config: ApifyPluginConfig): string;
export declare function resolveEnabled(params: {
    config: ApifyPluginConfig;
    apiKey?: string;
}): boolean;
export declare function resolveMaxResults(config: ApifyPluginConfig, max?: number): number;
export declare function isToolEnabled(config: ApifyPluginConfig, toolName: string): boolean;
export declare function createApifyClient(apiKey: string, baseUrl: string): ApifyClient;
export declare function truncateResults(text: string): string;
//# sourceMappingURL=apify-client.d.ts.map