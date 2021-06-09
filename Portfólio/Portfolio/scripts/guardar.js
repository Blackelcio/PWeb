        var jog;
        var vel;
        var dx;
        var dy;
        var px;
        var py;
        var anima;
        var estado;

    function inicia(){
        vel=2;
        dx=1;
        dy=0;
        px=0;
        py=0;
        jog=document.getElementById("jogador");
        game();
    }
    function moverParar(){
        if(estado){
            if(px<=10){
            estado=0;
            cancelAnimationFrame(anima);                
            }

        }else{
            estado=1;
            anima=requestAnimationFrame(game);
        }
    }
    function game(){
        px+=(dx*vel);
        //py+=(dy*vel);
        jog.style.left=px+"px";
    
        moverParar();
        

        anima=requestAnimationFrame(game);
    }

    window.addEventListener("load", inicia);