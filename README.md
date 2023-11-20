I was listening to [this beautiful piece 🎻](https://open.spotify.com/track/2bwzPgxD3UTmiTFlTFjNgL?si=0a530294217044be)  while working on this.

This package has been created under the functional paradigm in Javascript.
It means to be more `declarative over imperative`.


```
 x = expression_1;
 y = expression_2;
 z = expression_3(x + y);
 
 // The upper 3 lines could be written as
 z = xy()
```

## Installation

**npm**
```
npm i onstage-js-utils
```

**yarn**
```
yarn add onstage-js-utils
```

## String

All string manipulations

- `concatURLs`
 This function will concatenate your base URL to any path you want without any fear of double slashes `//`

 ```javascript
 import { concatURLs } from "onstage-js-utils";

 concatURLs("https://example.com/", "/users") // output: https://example.com/users
 concatURLs("https://example.com", "users")   // output: https://example.com/users
 concatURLs("https://example.com", "//users") // output: https://example.com/users
 ```
- `combineURLs`
This function is deprecated version of `concatURLs`

- `withQueries`
Append query strings to end of URLs

```javascript
import { withQueries } from "onstage-js-utils";

const url = withQueries("/someone", "name=John") // /someone?name=John
withQueries(url, "age=34") // /someone?name=John&age=34
```

- `withUnderscore()`
 Replaces strings seperator with `_`.

 ```javascript
 withUnderscore('onstage-js-utils'); // onstage_js_utils
 withUnderscore('onstage.js.utils'); // onstage_js_utils
 withUnderscore('onstage.js-utils'); // onstage_js_utils

 ```

- `toSnakeCase()` 
The most reasonable use case could be converting keys of request data 
to snake cases on saving to database.

```javascript
import {toSnakeCase} from "onstate-js-utils";

const snakedCase = Object
                .keys(data)
                .reduce((acc, key) => {
                    acc[toSnakeCase(key)] = data[key];
                    return acc;
                }, {});
```

## Localization

 - `getLocale`

 Locale time of the user's browser

 ```javascript
 import { getLocale } from "onstage-js-utils";

 getLocale() // en-US

 ```

 - `getTimeZone`

 Find users's browser time zone

 ```javascript
 import { getTimeZone } from "onstage-js-utils";
 getTimeZone() // Canada/Central
 ```


 ## DOM

 - `toImageSource(src: string | File )`
 Most of the time that we have an `img` tag there is a condition for getting `src` attribute from `url` or `blob` at the same
 place.

 ```javascript

 import { toImageSource } from "onstage-js-utilities";

 <img src={toImageSource(src || file)} />

 ```

 ## Objects and Arrays

   - `objectsDiff(changed: Object, base: Object)`
   This function compares two objects and returns the changes

```javascript
import { objectsDiff } from "onstage-js-utilities";

const base = {
    price: 99.9,
    type: "product"
}

const changed = {
    price: 99.9,
    type: "orders"
}

objectsDiff(changed, base)
// { type: "orders" }
```


## Interceptors

 - `fetchJsonRes(res: Response)`

```javascript
import {fetchJsonRes, concatURLs} from "onstage-js-utilities";

fetch(concatURLs(HOST, "users"))
    .then(fetchJsonRes)
    .then(json => {
        // json data
    })
    .catch(err => {
        // when the data is not json
    })
```

## Timers and Delay

  - `delay(ms: number)` creates a delay for async procedures
  
  ```javascript
  import { delay } from "onstage-js-utilities";

  async () => {
    await delay(1500)
    // after 1500 milliseconds and more
  }
  ```
  - `randomDelay(range: number | [number, number])` delay process between `min` and `max` numbers
  ```javascript
  import { randomDelay } from "onstage-js-utilities";

  async () => {
    await randomDelay(2000) // between 0 - 2000
    await randomDelay([1000, 3000]) // between 1000 - 3000
  }
  ```

## Ranges
- `range(start: number, end: number)` creates an array of numbers between start and end, excluding the end.
```javascript
import { range } from "onstage-js-utilities";

range(1, 5)

// [1, 2, 3, 4]
```

- `rangeLetters(start: string, end: string)` return an array of letters(lowercase) between start and end, including the end.
```javascript
import { rangeLetters } from "onstage-js-utilities";

rangeLetters('a', 'e')

// ['a', 'b', 'c', 'd', 'e']
```
