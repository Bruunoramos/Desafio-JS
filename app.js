alert('Boas vindas ao nosso site!') ;
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponível = 1000;
alert('Por favor preencha todos os campos') ;
let mensagemDeErro = 'Erro! Preencha todos os campos';
let nomeDoUsuario = prompt('Digite o seu Nome');
let idadeDoUsuario = prompt('Digite sua idade');
if (nomeDoUsuario == '') {alert(mensagemDeErro)};
if (idadeDoUsuario == '') {alert(mensagemDeErro)};
if (idadeDoUsuario >= 18) {alert('Apto a Tirar sua Habilitação!')};
if (idadeDoUsuario <= 17) {alert('É necessário ter mais de 18 anos para tirar a habilitação')}