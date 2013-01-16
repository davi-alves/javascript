/**
 * Created with JetBrains PhpStorm.
 * User: Davi
 * Date: 23/11/12
 * Time: 11:14
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

var davi = new Person('Davi', 'Alves');