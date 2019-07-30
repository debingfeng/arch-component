var $_loading = (function () {
    var doc = document;
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
     * prevent default
     * @param e
     */
    function move(e) {
        e.preventDefault()
    }

    /**
     * Block page scrolling
     */
    function stopScroll() {
        document.body.style.overflow = 'hidden';
        document.addEventListener("touchmove", move, false);//禁止页面滑动
    }

    /**
     * Unblock page scrolling
     */
    function recoverScroll() {
        document.body.style.overflow = '';//出现滚动条
        document.removeEventListener("touchmove", move, false);
    }


    /**
     * 创建loadingHTML元素
     */
    var createLoader = function () {
        var wrapper = createElement('div');

        var loadContainer = createElement("div"),
            loader = createElement("div"),
            loadContent = createElement("span");

        addClass(wrapper, 'over-layer xtc-loading');

        addClass(loadContainer, 'xtc-load-container');

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
        if (xtcLoading) {
            return console.error('xtcLoading already exist');
        }
        doc.body.appendChild(createLoader());
        stopScroll();
    };
    /**
     * 移除loadingHTML元素
     */
    var removeLoadingElement = function () {
        var xtcLoading = doc.querySelector(".xtc-loading");
        if (xtcLoading) {
            doc.body.removeChild(xtcLoading);
            recoverScroll();
        }
    };
    return {
        show: loadLoadingElement,
        remove: removeLoadingElement
    };
})();