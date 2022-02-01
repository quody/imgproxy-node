import { ImgproxyConfig } from './types';
export declare abstract class BaseBuilder {
    protected config: ImgproxyConfig;
    constructor(config: ImgproxyConfig);
    /**
     * Generates a URL based on the set options.
     *
     * @param uri The uri of the image
     * @param extension optional string to append as extension
     */
    generateUrl(uri: string, extension?: string): string;
    protected abstract serializeOptions(): string;
}
