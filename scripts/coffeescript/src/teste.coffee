Cliente = (nome, email) ->
  return new Cliente(nome, email) if this not instanceof Cliente
  this.nome = nome
  this.email = email
  this.init.apply(this, arguments)
  this

Cliente.prototype =
  init: ->

  getDados: ->
    "Nome: #{this.nome}, Email#{this.email}"

Funcionario = (nome, matricula) ->
  return new Funcionario(nome, matricula) if this not instanceof Funcionario
  this.nome = nome
  this.matricula = matricula
  this

Funcionario.prototype =
  init: ->
    throw Exception('Nome não informado') if this.nome is null
  getDados: ->
    "Nome: #{this.nome}, Matrícula: #{this.matricula}"