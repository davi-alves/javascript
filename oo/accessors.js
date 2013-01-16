/**
 * Created with JetBrains PhpStorm.
 * User: Davi
 * Date: 22/11/12
 * Time: 11:45
 * To change this template use File | Settings | File Templates.
 */

// Data and Accessors Properties
var createPerson = function (firstName, lastName) {
    var person = {};

    Object.defineProperties(person, {
        firstName:{
            value:firstName,
            enumerable:true
        },
        lastName:{
            value:lastName,
            enumerable:true
        },
        fullName:{
            get:function () {
                return this.firstName + " " + this.lastName;
            },
            enumerable:true
        }
    });

    return person;
}

var person = createPerson('Davi', 'Alves');