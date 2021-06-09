var objPerfil = {
    nome: "Elcio Naves",
    anoNasc: 1979,
    profissao: "estudante",

    cumprimento() {
        hora = new Date().getHours();
        if (hora >= 6 && hora <= 12) {
            return "Bom dia";
        } else if (hora > 12 && hora < 18) {
            return "Boa tarde";
        } else if (hora >= 18 && hora < 24) {
            return "Boa noite";
        } else {
            return "Boa madrugada";
        }
    },
    texto() {
        return (
            this.cumprimento() + `\n` +
            `Eu sou o ${this.nome}, ${this.profissao} de Análise e Desenvolvimento de Sistmas. ` +
            `Eu tenho ${new Date().getFullYear() - this.anoNasc} anos ` +
            `e aqui é o canal para que conheçam as minhas ideias, projetos e estudos.`
        );
    },
};

console.log(objPerfil.texto());
console.log(objPerfil.cumprimento());

function exibirTexto() {
    return document.getElementById("Perfil").innerHTML = objPerfil.texto();
}

function move() {
    var elem = document.getElementById("quadrado");
    var cicle = document.getElementById("circulo");
    var direita = document.getElementById("seta");
    var esquerda = document.getElementById("setaRetratil");
    var pos = 0;
    var tam = elem.clientWidth;
    direita.style.display = "none";
    direita.style.zIndex = "-3"
    elem.style.display = "block";
    elem.style.height = "200" + "px";
    elem.style.top = "50" + "px";
    cicle.style.zIndex = "1";
    elem.style.zIndex = "2";


    id = setInterval(frame, 5)

    function frame() {
        if (pos == 640) {
            esquerda.style.display = "block";
            esquerda.style.zIndex = "4";
            clearInterval(id);

        } else {
            pos++;
            tam++;

            elem.style.width = tam + "px";
        }
    }
}

function retratil() {
    var elemento = document.getElementById("quadrado");
    var cicle = document.getElementById("circulo");
    var direita = document.getElementById("seta");
    var esquerda = document.getElementById("setaRetratil");
    var pos = 640 + "px";
    var tam = elemento.clientWidth;
    esquerda.style.display = "none";
    direita.style.display = "block";
    //Funções
    id = setInterval(frame, 5)

    function frame() {
        if (pos == 0) {
            cicle.style.border = "0px solid #fff";
            cicle.display = "block";
            elemento.display = "block";
            direita.style.display = "block";
            cicle.style.zIndex = "2";
            direita.style.zIndex = "30";

            clearInterval(id);
        } else {
            pos--;
            tam--;

            if (tam == 2) {
                direita.style.zIndex = "30";
            }
            elemento.style.width = tam + "px";
        }
    }
}

function addEvento() {
    document.getElementById("quadrado").addEventListener('load', move);
    document.getElementById("quadrado").addEventListener('load', retratil);
    document.getElementById("Perfil").addEventListener('load', exibirTexto);
}
window.addEventListener("load", addEvento);