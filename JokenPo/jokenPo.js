function escolha(){
    var jogador = prompt("Qual e o seu nome?","Digite o seu nome aqui!");

    document.write(jogador + ", escolha pedra, papel ou tesoura!");
}



var tentando = "";
function inserindo(){
    tentando = document.getElementById('NomeEscrito').value;
    document.getElementById('JogadorPoke').innerHTML = tentando;
}

function jogada(){
    if(document.getElementById("pedra").checked == false && document.getElementById("papel").checked == false && document.getElementById("tesoura").checked == false){
        alert("Selecione uma opção!");
    }else{
        var sorteio = Math.floor(Math.random() * 3);
        switch(sorteio){
            case 0:
                document.getElementById("pc").src="pedra.png";
                break;
            case 1:
                document.getElementById("pc").src="papel.png";
                break;
            case 2:
                document.getElementById("pc").src="tesoura1.png";
                break;
        }

        if((document.getElementById("pedra").checked == true && sorteio == 0) ||
        (document.getElementById("papel").checked == true && sorteio == 1) || 
            (document.getElementById("tesoura").checked == true && sorteio == 2)){
                document.getElementById("placar").innerHTML="Empate";
            }else if((document.getElementById("pedra").checked == true && sorteio == 2) ||
             (document.getElementById("papel").checked == true && sorteio == 0) ||
            (document.getElementById("tesoura").checked == true && sorteio == 1)){
                document.getElementById("placar").innerHTML="Você venceu!!!";
            }else{
                document.getElementById("placar").innerHTML="O computador venceu!";
            }

    }
}

function resetar(){
    document.getElementById("pc").src="";
    document.getElementById("placar").innerHTML="";
}