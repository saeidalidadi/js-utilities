## Strings

All string manipulations

### combineURLs
 This function will concat your base URL to any path you want without any fear of double slashes `//`

 ```javascript
 import { combineURLs } from "onstage-js-utils";

 combineURLs("https://example.com/", "/users") // output: https://example.com/users

 ```
## Localization

 ### getLocale

 Locale time of the user's browser

 ```javascript
 import { getLocale } from "onstage-js-utils";

 getLocale() // en-US

 ```


 ### getTimeZone

 Find users's browser time zone

 ```javascript
 import { getTimeZone } from "onstage-js-utils";
 getTimeZone() // Canada/Central
 ```


 ## DOM

 Most of the time that we have an `img` tag there is a condition for getting `src` attribute from `url` or `blob` at the same
 place.

 ```javascript

 import { toImageSource } from "onstage-js-utilities";

 <img src={toImageSource(src || file)} />

 ```

 ## Objects and Arrays

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
