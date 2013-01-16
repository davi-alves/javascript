/**
 * Created with JetBrains PhpStorm.
 * User: Davi
 * Date: 22/11/12
 * Time: 17:51
 * To change this template use File | Settings | File Templates.
 */
var createPerson = function (firstName, lastName) {
    var person = {
        firstName:firstName,
        lastName:lastName,
        sayHello:function () {
            return 'Hi there.';
        }
    };

    Object.defineProperty(person, 'fullName', {
        get:function () {
            return this.firstName + ' ' + this.lastName;
        },
        enumerable:true,
        configurable:true
    });

    return person;
};

var createEmployee = function (firstName, lastName, position) {
    var person = createPerson(firstName, lastName);
    person.position = position;

    var fullName = Object.getOwnPropertyDescriptor(person, 'fullName');
    var fullNameFunction = fullName.get.bind(person);
    Object.defineProperty(person, 'fullName', {
        get:function () {
            return fullNameFunction() + ', ' + this.position;
        },
        configurable:true,
        enumerable:true
    });

    var sayHelloFn = person.sayHello.bind(person);

    person.sayHello = function () {
        return sayHelloFn() + "My name is " + this.fullName;
    }

    return person;
};

var davi = createEmployee('Davi', 'Alves', 'Programador');