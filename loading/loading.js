var $_loading = (function () {
    var doc = document;
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