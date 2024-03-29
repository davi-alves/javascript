/**
 * Created with JetBrains PhpStorm.
 * User: Davi
 * Date: 22/11/12
 * Time: 14:23
 * To change this template use File | Settings | File Templates.
 */
var flying = (function (flying) {

    var createToolbarItem = function (itemElement) {
        var item = {
            toggleActiveState:function () {
                this.actived = !this.actived;
            }
        };

        Object.defineProperties(item, {
            el:{
                value:itemElement
            },
            enabled:{
                get:function () {
                    return !this.el.classList.contains('disabled');
                },
                set:function (value) {
                    if (value) {
                        this.el.classList.remove('disabled');
                    } else {
                        this.el.classList.add('disabled');
                    }
                }
            },
            actived:{
                get:function () {
                    return this.el.classList.contains('active');
                },
                set:function (value) {
                    if (value) {
                        this.el.classList.add('active');
                    } else {
                        this.el.classList.remove('active');
                    }
                }
            }
        });

        return item;
    };

    var createToolbarItems = function (itemElements) {
        var items = [];

        [].forEach.call(itemElements, function (el, index, array) {
            var item = createToolbarItem(el);
            items.push(item);
        });

        return items;
    };

    flying.createToolbar = function (elementId) {
        var element, items;

        element = document.getElementById(elementId);
        if (!element) {
            element = document.createElement('DIV');
            element.id = elementId;
            element.className = 'toolbar';
        }

        items = element.querySelectorAll(".toolbar-item");

        var toolbar = {
            add:function (options) {
                var span = document.createElement('SPAN');
                span.className = 'toolbar-item';
                this.el.appendChild(span);

                var item = createToolbarItem(span);
                this.items.push(item);
            },
            remove:function (index) {
                var len = this.items.length;

                if (index > len || index < 0) {
                    throw new Error("Indice fora de alcance");
                }

                var item = this.items[index];
                this.items.splice(index, 1);
                this.el.removeChild(item.el);
                item = null;
            },
            appendTo:function (parentElement) {
                parentElement.appendChild(this.el);
            }
        };

        Object.defineProperties(toolbar, {
            el:{
                value:element
            },
            items:{
                value:createToolbarItems(items),
                enumerable:true
            }
        });

        return toolbar;
    };

    return flying;
})(flying || {});