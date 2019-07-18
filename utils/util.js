var _DOC = document;
/**
 *创建元素
 */
var createElement = function (tag) {
    return _DOC.createElement(tag);
};
/**
 * 检测样式
 * @param elements
 * @param cName
 * @returns {boolean}
 */
var hasClass = (elements, cName) => {
    return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
};
/**
 * 添加样式
 * @param elements
 * @param cName
 */
var addClass = (elements, cName) => {
    if (!hasClass(elements, cName)) {
        elements.className += " " + cName;
    }
};
/**
 * 移除样式
 * @param elements
 * @param cName
 */
var removeClass = (elements, cName) => {
    if (hasClass(elements, cName)) {
        elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " ");
    }
};
/**
 * 扩展对象
 * @param origin
 * @param target
 * @return {*}
 */
var extend = function (origin,target){
    for(var key in target) {
        if(target.hasOwnProperty(key)) {
            origin[key] = target[key];
        }
    }
    return origin;
};