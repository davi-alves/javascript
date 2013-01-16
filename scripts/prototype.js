/**
 * Created with JetBrains PhpStorm.
 * User: davi
 * Date: 06/06/12
 * Time: 11:03
 * To change this template use File | Settings | File Templates.
 */

var Cliente = function (nome, email) {
    "use strict";
    this.nome = nome;
    this.email = email;
    this.init.apply(this, arguments);

    return this;
};

Cliente.prototype = {
    nome: '',
    email: '',
    init: function () {
        "use strict";

    },
    setNome: function (nome) {
        "use strict";
        this.nome = nome;
        this.getDados();
    },
    getDados: function () {
        "use strict";
        console.log('Nome: ' + this.nome + ' | Email: ' + this.email);
    }
};

/*Cliente.prototype.getDados = function () {
 console.log('Nome: ' + this.nome + ' | Email: ' + this.email);
 }*/

var cliente = new Cliente('Davi', 'davi@email.com');
cliente.setNome('Davi Alves');