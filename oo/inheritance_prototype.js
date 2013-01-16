/**
 * Created with JetBrains PhpStorm.
 * User: Davi
 * Date: 23/11/12
 * Time: 16:55
 * To change this template use File | Settings | File Templates.
 */
var Person = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    /*
     métodos dentro do construtor podem "emular" privacidade, mas a custo de
     memória adiciona a aca nova instância do objeto
     */
};

Object.defineProperties(Person.prototype, {
    fullName:{
        get:function () {
            return this.firstName + ' ' + this.lastName;
        },
        enumerable:true,
        configurable:true
    },
    sayHi:{
        value:function () {
            return 'Hi there.';
        },
        enumerable:true
    }
});

var Employee = function (firstName, lastName, position) {
    Person.call(this, firstName, lastName);
    this.position = position;
};

Employee.prototype = Object.create(Person.prototype, {
    fullName:{
        get:(function () {
            var desc = Object.getOwnPropertyDescriptor(Person.prototype, 'fullName').get;
            return function () {
                return desc.call(this) + ', ' + this.position;
            };
        })(),
        enumerable:true
    },
    sayHi:{
        value:function () {
            return Person.prototype.sayHi.call(this) + ' My name is  ' + this.fullName;
        },
        enumerable:true
    }
});

var davi = new Employee('Davi', 'Alves', 'Programador');