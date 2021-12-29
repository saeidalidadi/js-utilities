/**
 * Concat URI parts without fear of slashes
 * @param {string}
 * @param {string}
 * @returns {string}
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
 * 
 * @returns {string} locale code like en-US
 */
export const getLocale = (): string => {
    const { locale } = resolvedOptions();
    return locale;
}

/**
 * 
 * @returns {string} timeZone code like 'Canada/Central'
 */
export const getTimeZone = (): string => {
    const { timeZone } = resolvedOptions();
    return timeZone;
}