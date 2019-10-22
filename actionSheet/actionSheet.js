var $_actionSheet = (function () {
    var initConfig = {
        action: [
            {
                name: '取消',
                callback: () => {
                }
            }
        ],
        menu: [
            // {
            //     name: '取消',
            //     callback: () => {}
            // }
        ]
    };

    /**
     * render item element and add event
     * @param arr
     * @param tag
     * @param className
     */
    function renderOption(arr, tag, className) {
        for (var i = 0, l = arr.length; i < l; i++) {
            var item = arr[i];
            (function (item) {
                var $section = createElement('section');
                addClass($section, className);
                $section.innerText = item.name;
                tag.appendChild($section);
                $section.addEventListener('click', function () {
                    item.callback && item.callback.apply(this, item);
                    remove();
                });
            })(item)

        }
    }

    /**
     * create ActionSheet
     * @returns {*}
     */
    function createActionSheet(actionConfig) {
        var $overLayer = document.querySelector('.over-layer');
        if ($overLayer) {
            return console.error('actionsheet already exist');
        }
        var $layer = createElement('div'),
            $actionSheet = createElement('div'),
            $menuSheet = createElement('div'),
            $action = createElement('div');

        addClass($layer, 'over-layer xtc-actionsheet');
        addClass($actionSheet, 'actionsheet');
        addClass($menuSheet, 'actionsheet-menu');
        addClass($action, 'actionsheet-action');
        // render menu elements
        if (actionConfig.menu.length < 1) {
            throw 'actionMenu is not empty!';
        }
        renderOption(actionConfig.menu, $menuSheet, 'actionsheet-menu-item');
        $actionSheet.appendChild($menuSheet);

        // render action elements
        if (actionConfig.action.length < 1) {
            throw 'actionMenu is not empty!';
        }
        renderOption(actionConfig.action, $action, 'actionsheet-action-item');
        $actionSheet.appendChild($action);
        $layer.appendChild($actionSheet);

        // click non-button to close actionsheet
        $layer.addEventListener('click', function (event) {
            var target = event.target;
            if (/xtc-actionsheet/g.test(target.className)) {
                remove();
                return false;
            }
        });
        return $layer;
    }

    /**
     * Add Actionsheet
     * @param config
     */
    function open(config) {
        var actionSheetConfig = expand(initConfig, config);
        var actionSheet = createActionSheet(actionSheetConfig);
        stopScroll();
        document.body.appendChild(actionSheet);
    }

    /**
     * remove actionsheet
     */
    function remove() {
        var $actionSheetContainer = document.querySelector('.xtc-actionsheet');
        if ($actionSheetContainer) {
            addClass($actionSheetContainer, 'fadeOut');
            var $actionsheet = $actionSheetContainer.querySelector('.actionsheet');
            addClass($actionsheet, 'fadeOutDown');
            setTimeout(function () {
                document.body.removeChild($actionSheetContainer);
                recoverScroll();
            }, 350);

        }
    }

    return {
        open: open,
        remove: remove
    }

})();