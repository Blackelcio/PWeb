var n1, n2;
var soma, subtracao, produto, divisao, resto;

n1 = prompt("Digite um numero: ","Digite aqui!");
n2 = prompt("Digite outro numero: ","Digite aqui!");

soma = parseFloat(n1) + parseFloat(n2);
subtracao = parseFloat(n1) - parseFloat(n2);
produto = parseFloat(n1) * parseFloat(n2);
divisao = parseFloat(n1)/parseFloat(n2);
resto = parseFloat(n1)%parseFloat(n2);

document.write(
    "Soma = " + soma + "<br>" +
    "Subtracao = " + subtracao + "<br>" +
    "Produto = " + produto + "<br>" +
    "Divisao = " + Math.round(divisao) + "<br>" +
    "Resto = " + resto
);