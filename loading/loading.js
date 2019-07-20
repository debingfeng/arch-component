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
     * Block page scrolling
     */
    function stopScroll() {
        // 防止页面股东
        var docBody = document.body;

        addClass(document.firstElementChild, 'wh-full');
        addClass(docBody, 'wh-full');
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
        removeClass(document.firstElementChild, 'wh-full');
        removeClass(docBody, 'wh-full');
        docBody.style.overflow = 'visible';
        docBody.style.position = 'static';
        document.body.removeEventListener('touchmove', function () {
        });
    }

    /**
     * 创建loadingHTML元素
     */
    var createLoader = function () {
        var wrapper = createElement('div');

        var loadContainer = createElement("div"),
            loader = createElement("div"),
            loadContent = createElement("p");

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