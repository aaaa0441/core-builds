/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @enum {number} */
var SecurityContext = {
    NONE: 0,
    HTML: 1,
    STYLE: 2,
    SCRIPT: 3,
    URL: 4,
    RESOURCE_URL: 5,
};
export { SecurityContext };
SecurityContext[SecurityContext.NONE] = "NONE";
SecurityContext[SecurityContext.HTML] = "HTML";
SecurityContext[SecurityContext.STYLE] = "STYLE";
SecurityContext[SecurityContext.SCRIPT] = "SCRIPT";
SecurityContext[SecurityContext.URL] = "URL";
SecurityContext[SecurityContext.RESOURCE_URL] = "RESOURCE_URL";
/**
 * Sanitizer is used by the views to sanitize potentially dangerous values.
 *
 *
 * @abstract
 */
var /**
 * Sanitizer is used by the views to sanitize potentially dangerous values.
 *
 *
 * @abstract
 */
Sanitizer = /** @class */ (function () {
    function Sanitizer() {
    }
    return Sanitizer;
}());
/**
 * Sanitizer is used by the views to sanitize potentially dangerous values.
 *
 *
 * @abstract
 */
export { Sanitizer };
function Sanitizer_tsickle_Closure_declarations() {
    /**
     * @abstract
     * @param {?} context
     * @param {?} value
     * @return {?}
     */
    Sanitizer.prototype.sanitize = function (context, value) { };
}
//# sourceMappingURL=security.js.map