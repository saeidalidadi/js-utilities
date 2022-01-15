/**
 * Concat URI parts without fear of slashes
 * @param {string} baseURL - like "http://example.com/"
 * @param {string} relativeURL - like "/users"
 * @returns {string} url - combined URL
 */

export const combineURLs = (baseURL: string, relativeURL: string): string => {
    const url = relativeURL
        ? baseURL.replace(/\/+$/, "") + '/' + relativeURL.replace(/^\/+/, '')
        : baseURL;
    return url;
}

/**
 * get response of fetch always as json object. 
 */
export const fetchResponse = async (response: any) => {
    try {
        let text = await response.text()
        return await JSON.parse(text);
    } catch (err) {
        throw err
    }
}

export const resolvedOptions = () => {
    return Intl.DateTimeFormat().resolvedOptions();
}

/**
 * Find user's browser locale code
 * @returns {string} locale - code like en-US
 */
export const getLocale = (): string => {
    const { locale } = resolvedOptions();
    return locale;
}

/**
 * Find users's browser time zone
 * @returns {string} timeZone - like 'Canada/Central'
 */
export const getTimeZone = (): string => {
    const { timeZone } = resolvedOptions();
    return timeZone;
}

/**
 * Set source of image tag 
 * @param {string|object} src - the remote url or local image file
 * @return {string}
 */
export const toImageSource = (src: string | File): string =>  {
    return typeof src === 'string' ? src : URL.createObjectURL(src);
}
