# JS Engine

Motor de jogo para JavaScript, feito para a cadeira de Programação para Jogos I.

## Instruções



  Crie seu HTML normalmente. No <head>, importe os scripts da seguinte forma:
  ```html
    <head>
        ...
        <script src="./src/UUID.js"></script>
        <script src="./src/Component.js"></script>
        <script src="./src/Scene.js"></script>
        <script src="./src/Graphics.js"></script>
        <script src="./src/Input.js"></script>
        <script src="./src/Engine.js"></script>
    </head>
  ```
No <body>, insira um <canvas> com id "game_canvas". Ao fechar a tag body, importe o script do seu jogo:
```html
<body>
    <canvas id="game_canvas" width="800" height="600"></canvas>
    <script src="myGame.js"></script>
</body>
```

Um exemplo de implementação de um jogo na engine pode ser encontrado em pong2.js
Ou pode ser feito em tags Script no final da tag <body>
```html
<script>
    new Engine().init(engine =>{
        var myScene = new Scene();
        var character = new MyCharacter(params);
        var enemy = new MyEnemy(params);
        
        myScene.addChild(character);
        myScene.addChild(enemy);
        Engine.scene = myScene;
    
    })
</script>
```
## Criação de classes
Para seu objeto entrar no game loop, faça uma classe que herde de Component
Exemplo:
```js
class Paddle extends Component {
    constructor(x, y, w, h){
        super(x, y, w, h, "Paddle");
        
    }

    move(dt){
        
        this.y = MouseInput.y;
    }
    draw(){
        Graphics.drawRect(this.x, this.y, this.w, this.h, "white");
    }
}
```
## Workflow
1. Crie seus componentes (Game Objects)
```js
        var player = new Paddle(15, 200, 15, 150);
```
2. Instancie uma Scene
```js
        var myScene = new Scene();
```

3. Adicione os objetos na Scene, utilizando Scene.addChild(component)
```js
        myScene.addChild(player);
```
4. Troque a cena da Engine;
```js
        Engine.scene = myScene;
```
