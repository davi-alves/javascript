/**
 * Created with JetBrains PhpStorm.
 * User: Davi
 * Date: 22/11/12
 * Time: 14:23
 * To change this template use File | Settings | File Templates.
 */
var flying = (function (flying) {

    var ToolbarItem = function (itemElement) {
        Object.defineProperties(this, {
            __el:{
                value:itemElement
            }
        });
    };

    Object.defineProperties(ToolbarItem.prototype, {
        toggleActiveState:{
            value:function () {
                this.actived = !this.actived;
            },
            enumerable:true
        },
        enabled:{
            get:function () {
                return !this.__el.classList.contains('disabled');
            },
            set:function (value) {
                if (value) {
                    this.__el.classList.remove('disabled');
                } else {
                    this.__el.classList.add('disabled');
                }
            }
        },
        actived:{
            get:function () {
                return this.__el.classList.contains('active');
            },
            set:function (value) {
                if (value) {
                    this.__el.classList.add('active');
                } else {
                    this.__el.classList.remove('active');
                }
            }
        }
    });

    var createToolbarItems = function (itemElements) {
        var items = [];

        [].forEach.call(itemElements, function (el, index, array) {
            var item = new ToolbarItem(el);
            items.push(item);
        });

        return items;
    };

    var Toolbar = function (toolbarElement) {
        var items;
        items = toolbarElement.querySelectorAll(".toolbar-item");


        Object.defineProperties(this, {
            __el:{
                value:toolbarElement
            },
            items:{
                value:createToolbarItems(items),
                enumerable:true
            }
        });
    }

    Object.defineProperties(Toolbar.prototype, {
        add:{
            value:function (options) {
                var span = document.createElement('SPAN');
                span.className = 'toolbar-item';
                this.__el.appendChild(span);

                var item = new ToolbarItem(span);
                this.items.push(item);
            },
            enumerable:true
        },
        remove:{
            value:function (index) {
                var len = this.items.length;

                if (index > len || index < 0) {
                    throw new Error("Indice fora de alcance");
                }

                var item = this.items[index];
                this.items.splice(index, 1);
                this.__el.removeChild(item.__el);
                item = null;
            },
            enumerable:true
        },
        appendTo:{
            value:function (parentElement) {
                parentElement.appendChild(this.__el);
            }
        }
    });

    flying.createToolbar = function (elementId) {
        var element, items;

        element = document.getElementById(elementId);
        if (!element) {
            element = document.createElement('DIV');
            element.id = elementId;
            element.className = 'toolbar';
        }

        return new Toolbar(element);
    };

    return flying;
})(flying || {});