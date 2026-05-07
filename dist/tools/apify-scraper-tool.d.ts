import { ApifyClient } from "apify-client";
import type { AnyAgentTool } from "openclaw/plugin-sdk";
export declare function createApifyScraperTool(options?: {
    pluginConfig?: Record<string, unknown>;
    /** Inject a client for testing. When omitted, a real ApifyClient is created. */
    client?: ApifyClient;
}): AnyAgentTool | null;
//# sourceMappingURL=apify-scraper-tool.d.ts.map