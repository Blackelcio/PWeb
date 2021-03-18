\*Atualizado!*\

var aluno;
var nota1 = 0;
var nota2 = 0;
var nota3 = 0;
var media = 0;

aluno = prompt("Digite o seu nome: ", "");

nota1 = prompt("Digite a sua nota 1","Digite aqui!");
nota2 = prompt("Digite a sua nota 2","Digite aqui!");
nota3 = prompt("Digite a sua nota 3","Digite aqui!");

media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3))/3;

document.write("Media do aluno " + aluno);

document.write("<br>Sua media e " + Math.round(media));

