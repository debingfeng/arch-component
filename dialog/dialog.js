var $_dialog = (function () {
    var initConfig = {
        title: '温馨提示',
        content: 'dialog 提示框内容',
        type: 'confirm',
        confirmTxt: '确认',
        confirm: function () {

        },
        cancelTxt: '取消',
        cancel: function () {

        }
    };

    /**
     * 创建alert
     */
    var createAlert = function (config) {

        // Add the main structure element
        var layer = createElement('div'),
            dialogContainer = createElement('div'),
            dialogHeader = createElement('header'),
            content = createElement('section'),
            footer = createElement('footer'),
            btn = createElement('section');

        // Add style for the main structure element
        addClass(layer, 'over-layer flex-center xtc-dialog');
        addClass(dialogContainer, 'dialog-container');
        addClass(dialogHeader, 'dialog-title flex-center');
        addClass(content, 'dialog-content');
        addClass(footer, 'dialog-footer');
        addClass(btn, 'dialog-btn');

        // Add inner text for every structure element
        dialogHeader.innerText = config.title;
        content.innerText = config.content;
        btn.innerText = config.btnTxt;

        // build dom structure element
        footer.appendChild(btn);
        dialogContainer.appendChild(dialogHeader);
        dialogContainer.appendChild(content);
        dialogContainer.appendChild(footer);
        footer.appendChild(btn);
        layer.appendChild(dialogContainer);
        document.body.appendChild(layer);

        // block page scroll
        stopScroll();

        // add event handle
        if (config.btnHandle && typeof config.btnHandle === 'function') {
            btn.addEventListener('click', function () {
                removeDialog();
                config.btnHandle();
            })
        }
        return layer;
    };

    /**
     * 创建confirm
     */
    function createConfirm(config) {
        // Add the main structure element
        var layer = createElement('div'),
            dialogContainer = createElement('div'),
            dialogHeader = createElement('header'),
            content = createElement('section'),
            footer = createElement('footer'),
            btnCancel = createElement('section'),
            btnConfirm = createElement('section');

        // Add style for the main structure element
        addClass(layer, 'over-layer flex-center xtc-dialog');
        addClass(dialogContainer, 'dialog-container');
        addClass(dialogHeader, 'dialog-title flex-center');
        addClass(content, 'dialog-content');
        addClass(footer, 'dialog-footer');
        addClass(btnCancel, 'dialog-btn dialog-btn-cancel');
        addClass(btnConfirm, 'dialog-btn dialog-btn-confirm');
        // render inner text
        dialogHeader.innerText = config.title;
        content.innerText = config.content;
        btnCancel.innerText = config.cancelTxt;
        btnConfirm.innerText = config.confirmTxt;

        // build element structure
        footer.appendChild(btnCancel);
        footer.appendChild(btnConfirm);
        dialogContainer.appendChild(dialogHeader);
        dialogContainer.appendChild(content);
        dialogContainer.appendChild(footer);
        layer.appendChild(dialogContainer);
        document.body.appendChild(layer);

        // block page scroll
        stopScroll();

        // cancel option
        btnCancel.addEventListener('click', function () {
            removeDialog();
            config.cancel && typeof config.cancel === 'function' && config.cancel();
        });

        // confirm option
        btnConfirm.addEventListener('click', function () {
            removeDialog();
            config.confirm && typeof config.confirm === 'function' && config.confirm();
        });


    }

    /**
     * removeDialog
     */
    function removeDialog() {
        var $xtcDialog = document.querySelector('.xtc-dialog');
        if ($xtcDialog) {
            recoverScroll();
            document.body.removeChild($xtcDialog);
        }
    }

    /**
     * create alert
     */
    function dialogAlert(config) {
        createAlert(expand({
            title: '温馨提示',
            content: 'dialog 提示框内容',
            type: 'alert',
            btnTxt: '我知道了',
            btnHandle: function () {

            }
        }, config));
    }

    /**
     * create confirm
     */
    function dialogConfirm(config) {
        createConfirm(expand(initConfig, config));
    }

    return {
        alert: dialogAlert,
        confirm: dialogConfirm
    }

})();