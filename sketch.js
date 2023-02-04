//criar variáveis
var skate, skateImg, skatecollide;

//função que carrega imagens

//carregar imagens
function preload() {
  skateImg = loadImage("Skat.png");
}

//função que inicializa o arquivo
function setup() {
  //cria tamanho do fundo da tela
  createCanvas(700, 700);
  //criar sprites
  skate = createSprite(350, 550, 20, 20);
  skatecollide = createSprite(350, 700, 20, 20);
  skatecollide.visible = false;
  //carregar imagem
  skate.addImage("skate", skateImg);
  //colocar tamanho
  skate.scale = 0.3;
}

//função que executa o programa até que seja parado
function draw() {
  //colocar cor de fundo
  background("black");
  //condição para pular
  if (keyDown("space")) {
    skate.velocityY = -10;
  }
  skate.velocityY = skate.velocityY + 0.5;
  skate.collide(skatecollide);
  //exibir texto de instrução
  fill("yellow");
  text("Pressione espaço para menino do skate pular", 230, 40);
  //comando que desenha sprites
  drawSprites();
}
