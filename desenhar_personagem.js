var canvas;//o elemento canvas sobre o qual desenharemos
var ctx;//o "contexto" da canvas que ser� utilizado (2D ou 3D)
var dx = 10;//a taxa de varia��o (velocidade) horizontal do objeto
var dy = 10;
var x = 0;//posi��o horizontal do objeto (com valor inicial)
var y = 0;//posi��o vertical do objeto (com valor inicial)
var xEnemie = 0;
var yEnemie = 0;
var WIDTH = 1000;//largura da �rea retangular
var HEIGHT = 340;//altura da �rea retangular
var eixoXdoDesenhoDaSubImage = 0;
var tile1 = new Image();//Imagem que ser� carregada e desenhada na canvas
var tile2 = new Image();
var tile3 = new Image();
var posicao = 1;
var posicaoY = 100
var posicaoDireita = 1;
var posicaoEsquerda = 5;//Indicador da posi��o atual do personagem
var NUM_POSICOES = 5;//Quantidade de imagens que comp�em o movimento
var rectPlayer = {};
var rectEnemy = {};
var rectFloor = {};
var image = "enemie.png"




function KeyDown(evt){
    switch (evt.keyCode) {
        case 39:  /*seta para direita*/
            posicaoY = 100;
            if (x + dx < WIDTH - 100){
                x += dx;
                posicaoDireita++;
                if(posicao == NUM_POSICOES){
                    posicao = 1;
                  
                }
            }
            break; 
        
        case 37:  /*seta para direita*/
            posicaoY = 300;
            if (x - dx > (WIDTH - WIDTH)){
                x -= dx;
                posicaoEsquerda--;
                if(posicaoEsquerda == 1){
                    posicaoEsquerda = 5;
                
                }
                posicao = posicaoEsquerda
            }
        break; 

        case 40:  /*seta para direita*/
            posicaoY = 0;
            if (y + dy < HEIGHT - 100){
                y += dy;
                posicao++;
                if(posicao == NUM_POSICOES){
                    posicao = 1;
                  
                }
            }
            break; 

        case 38:  /*seta para direita*/
            posicaoY = 200;
            if (y - dy > 0){
                y -= dy;
                posicao++;
                if(posicao == NUM_POSICOES){
                    posicao = 1;
                  
                }
            }
            break; 
    }

}

function Desenhar() {


    rectPlayer = {x,y, width: 100, height:100}
    tile1.src = "sprites.png";
    ctx.drawImage(tile1,  posicao*100, posicaoY, 100, 100, x,y, 100, 100);
    

    rectEnemy = {x:200,y:200,width:100,height:100}
    tile3.src = image;
    ctx.drawImage(tile3, 0, 0, 120, 100, 200,185, 100, 120);

    tile2.src = "floor.png"
   
    for(i = 0; i < WIDTH; i++){
            ctx.drawImage(tile2,  0, 0, 50, 50, i*50,290, 50, 50);
            rectFloor = {x:i*50,y:290,width:50,height:50}
    }
}

function colision(){
    if (rectPlayer.x < rectEnemy.x + rectEnemy.width &&
        rectPlayer.x + rectPlayer.width > rectEnemy.x &&
        rectPlayer.y < rectEnemy.y + rectEnemy.height &&
        rectPlayer.y + rectPlayer.height > rectEnemy.y) {
            console.log("colidiu")
     }
}

function colisionFloor(){
    if (
        rectPlayer.y < rectFloor.y + rectFloor.height &&
        rectPlayer.y + rectPlayer.height > rectFloor.y) {
           
     }else{
         y = y + 40;
     }
}

function LimparTela() {
    ctx.fillStyle = "rgb(233,233,233)";    
    ctx.beginPath();
    ctx.rect(0, 0, WIDTH, HEIGHT);
    ctx.closePath();
    ctx.fill();    
}

function Atualizar() {
    colision();
    colisionFloor();
    
    LimparTela();    
    Desenhar();
}

function Iniciar() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    return setInterval(Atualizar, 100);
}

window.addEventListener('keydown', KeyDown);
Iniciar();