/**
 * Create element
 */
var createElement = function (tag) {
    return document.createElement(tag);
};
/**
 * Has class
 * @param elements
 * @param cName
 * @returns {boolean}
 */
var hasClass = (elements, cName) => {
    return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
};
/**
 * Add Class
 * @param elements
 * @param cName
 */
var addClass = (elements, cName) => {
    if (!hasClass(elements, cName)) {
        elements.className += " " + cName;
    }
};
/**
 * remove Class
 * @param elements
 * @param cName
 */
var removeClass = (elements, cName) => {
    if (hasClass(elements, cName)) {
        elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " ");
    }
};
/**
 * Extand object
 * @param origin
 * @param target
 * @return {*}
 */
var expand = function (origin,target){
    for(var key in target) {
        if(target.hasOwnProperty(key)) {
            origin[key] = target[key];
        }
    }
    return origin;
};

/**
 * Block page scrolling
 */
function stopScroll() {
    // 防止页面股东
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'relative';
    document.addEventListener('touchmove', function (event) {
        event.preventDefault();
        return false;
    });
}

/**
 * Unblock page scrolling
 */
function recoverScroll() {
    document.body.style.overflow = 'visible';
    document.body.style.position = 'static';
    document.body.removeEventListener('touchmove', function () {
    });
}