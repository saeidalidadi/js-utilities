/**
 * Concat URI parts without fear of slashes
 * 
 */

export const combineURLs = (baseURL: string, relativeURL: string): string => {
    const url = relativeURL
        ? baseURL.replace(/\/+$/, "") + '/' + relativeURL.replace(/^\/+/, '')
        : baseURL;
    return url;
}
