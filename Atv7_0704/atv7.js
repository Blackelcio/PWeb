var numeros = [];

for(var i=1; i<=3; i++){
try{
    numeros[i] = parseInt(prompt('Digite o ' + i + '° número:'));
}
catch(e){
    i--;
    alert("número inválido");
}
}

    document.write("O maior número é: "+ Math.max(...numeros[i]));
    document.write("<br/>");
    document.write("O menor número é: "+ Math.min(...numeros[i]));
