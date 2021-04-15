var Aluno1 = new Object(),
RA = "0030481623012";
Nome = "Elcio Naves Rezende";

document.write("Primeiro tipo - Objeto usando new Object: <br/> RA: " + RA + "<br/>" + Nome);

var Aluno02 = {};
RA2 = "0030481623111";
Nome2 = "João Sebastião da Silva";

document.write("<br/><br/> Segundo tipo - Objeto usando só {}: <br/> RA: " + RA2 + "<br/> "+ Nome2);

var Aluno3 = {
    RA3: '003048162222',
    Nome3: 'Manoel de Portugal'  
};

document.getElementById("teste").innerHTML = ('Terceiro tipo - Objeto de forma linear:  <br/>RA: ' + Aluno3.RA3 + 'Nome ' + Aluno3.Nome3);
