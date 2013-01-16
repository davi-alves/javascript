/**
 * Created with JetBrains PhpStorm.
 * User: Davi
 * Date: 26/11/12
 * Time: 14:03
 * To change this template use File | Settings | File Templates.
 */

var EventTarget = function () {
    Object.defineProperties(this, {
        __listeners:{
            value:{}
        }
    });
};

/**
 * addListener
 * removeListener
 * event object
 */

Object.defineProperties(EventTarget.prototype, {
    addListener:{
        value:function (type, listener) {
            if (typeof this.__listeners[type] === 'undefined') {
                this.__listeners[type] = [];
            }

            this.__listeners[type].push(listener);
        },
        enumerable:true
    },
    __fire:{
        value:function (eventObject) {
            if (typeof eventObject.type === 'undefined') {
                throw new Error('Evento object needs type')
            }
            if (typeof eventObject.target === 'undefined') {
                eventObject.target = this;
            }

            var listeners = this.__listeners[eventObject.type];
            if (typeof listeners === 'undefined') {
                return;
            }

            var i = 0, len = listeners.length;
            for (i = 0; i < len; i++) {
                listeners[i].call(this, eventObject);
            }
        }
    },
    removeListener:{
        value:function (type, listener) {
            var listeners = this.__listeners[type];
            if (typeof listeners === 'undefined') {
                return;
            }

            var i = 0, len = listeners.length;
            for (i = 0; i < len; i++) {
                if (listeners[i] == listener) {
                    listeners.splice(i, 1);
                    break;
                }
            }
        },
        enumerable:true
    }
});

var listener1 = function (evt) {
    console.log(evt.type);
};
var listener2 = function (evt) {
    console.log(evt.target);
};

var obj = new EventTarget();
obj.addListener('load', listener1);
obj.addListener('load', listener2);

obj.__fire({type: 'load'});

obj.removeListener('load', listener1);
obj.removeListener('load', listener2);

obj.__fire({type: 'load'});
