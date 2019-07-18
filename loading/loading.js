var $_loading = (function () {
    var doc = document;
    /**
     *创建元素
     */
    var createElement = function (tag) {
        return doc.createElement(tag);
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
     * 创建loadingHTML元素
     */
    var createLoader = function () {
        var wrapper = createElement('div');

        var loadContainer = createElement("div"),
            loader = createElement("div"),
            loadContent = createElement("p");

        addClass(wrapper,'over-layer xtc-loading');

        addClass(loadContainer,'xtc-load-container');

        addClass(loader, "xtc-loader");
        addClass(loadContent, "load-content");
        loadContent.innerText = "加载中...";

        loadContainer.appendChild(loader);
        loadContainer.appendChild(loadContent);

        wrapper.appendChild(loadContainer);
        return wrapper;
    };
    /**
     * 载入loadingHTML元素
     */
    var loadLoadingElement = function () {
        var xtcLoading = doc.querySelector(".xtc-load");
        if (!xtcLoading) {
            addClass(doc.body, 'noscroll');
            var loadingElement = createLoader();
            doc.body.appendChild(loadingElement);
            doc.addEventListener('touchmove', function(event) {
                event.preventDefault();
                return false;
            })
        } else {
            console.error("当前已经有一个loading元素存在");
        }
    };
    /**
     * 移除loadingHTML元素
     */
    var removeLoadingElement = function () {
        var xtcLoading = doc.querySelector(".xtc-loading");
        if (xtcLoading) {
            doc.body.removeChild(xtcLoading);
            removeClass(doc.body, 'noscroll');
            doc.body.removeEventListener('touchmove', function () {});

        }
    };
    return {
        show: loadLoadingElement,
        remove: removeLoadingElement
    };
})();