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
    var docBody = document.body;

    addClass(document.firstElementChild,'wh-full');
    addClass(docBody,'wh-full');
    docBody.style.overflow = 'hidden';
    docBody.style.position = 'relative';
    document.addEventListener('touchmove', function (event) {
        event.preventDefault();
        return false;
    });
}

/**
 * Unblock page scrolling
 */
function recoverScroll() {
    var docBody = document.body;
    removeClass(document.firstElementChild,'wh-full');
    removeClass(docBody,'wh-full');
    docBody.style.overflow = 'visible';
    docBody.style.position = 'static';
    document.body.removeEventListener('touchmove', function () {
    });
}