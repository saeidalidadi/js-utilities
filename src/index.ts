import _transform from "lodash.transform";
import _isEqual from "lodash.isequal";
import _isObject from "lodash.isobject";

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
 * https://stackoverflow.com/questions/37121301/how-to-check-if-the-response-of-a-fetch-is-a-json-object-in-javascript
 */
export const fetchJsonRes = async (response: any) => {
    try {
        let text = await response.text()
        return await JSON.parse(text);
    } catch (err: any) {
        throw new Error("The response data is not as JSON format(" + err.message + ")")
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
 * @param {string|Object} src - the remote url or local image file
 * @return {string}
 */
export const toImageSource = (src: string | File): string => {
    return typeof src === 'string' ? src : URL.createObjectURL(src);
}


/**
 * Deep diff between two objects, using lodash
 * Original: https://gist.github.com/Yimiprod/7ee176597fef230d1451
 * @param  {Object} object Object compared
 * @param  {Object} base   Object to compare with
 * @return {Object}        Return a new object who represent the diff
 */
export const objectsDiff = (object: any, base: any) => {
    function changes(object: any, base: any) {
        return _transform(object, function (result: any, value, key) {
            if (!_isEqual(value, base[key])) {
                result[key] = (_isObject(value) && _isObject(base[key])) ? changes(value, base[key]) : value;
            }
        });
    }
    return changes(object, base);
}

/**
 * Delay event loop
 * @param {number} ms - waiting duration as milliseconds
 */
export const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Creates delay with random durations
 * @param range : the range or max for random durtions;
 */
export const randomDelay = async (range: number[] | number = 1000) => {
    let randomMS;
    if(typeof range === 'number') {
        randomMS = Math.round(Math.random() * range);
    } else {
        randomMS = Math.floor(Math.random() * (range[1] - range[0]) + range[0]);
    }
    return await delay(randomMS);
}

