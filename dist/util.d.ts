export declare class ToolInputError extends Error {
    readonly status = 400;
    constructor(message: string);
}
export declare function normalizeSecretInput(value: unknown): string;
export declare function wrapExternalContent(content: string, options: {
    source: string;
    includeWarning?: boolean;
}): string;
//# sourceMappingURL=util.d.ts.map