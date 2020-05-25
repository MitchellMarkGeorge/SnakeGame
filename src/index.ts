import { ScoreText } from './Score';
import { Food } from './Food';
// import { p5 } from 'p5';
import { GamePlane } from './GamePlane';
import { Snake } from './Snake';
// ScoreText
 import p5, { Vector } from 'p5';

//  import fontb from '../assets';


const sketch = (p5: p5) => {
    let snake: Snake;
    let gamePlane: GamePlane
    let boxWidth: number;
    let CELLS_PER_WALL = 11;
    let CELLS_RIGHT_OF_CENTER = (CELLS_PER_WALL) / 2
    let cellWidth: number;
    let righterMostCellCenter: number;
    let score: ScoreText;
    let food: Food;
    let font: any;

    document.querySelector('#score span');


    const keyMap = {
        'arrowup': p5.createVector(0, -1, 0),
        'arrowdown': p5.createVector(0, 1, 0),
        'arrowright': p5.createVector(1, 0, 0),
        'arrowleft': p5.createVector(-1, 0, 0),
        'w': p5.createVector(0, 0, 1),
        's': p5.createVector(0, 0, -1)
        // use A, D keys to orbit?
    }

    p5.preload = () => {
        // font = p5.loadFont("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
        // p5.textFont('Georgia', 7);
    }

    p5.setup = () => {

        p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
        console.log('loaded');

        // p5.textFont(font);
        // p5.textSize(12);
        
        // p5.textSize(p5.width / 3);
        // p5.textAlign(p5.CENTER, p5.CENTER);
        
        // p5.textAlign()

        boxWidth = p5.round(p5.width * 0.5);

        cellWidth = p5.round(boxWidth / CELLS_PER_WALL);
        righterMostCellCenter = cellWidth * CELLS_RIGHT_OF_CENTER;

        // gamePlane = new GamePlane(p5, righterMostCellCenter, cellWidth);
        gamePlane = generateNewGamePlane();
        snake = generateNewSnake();
        food = generateNewFood();
        score = new ScoreText(p5);

        // let x, y, z = generateRandomCoords();
        
        // food.setPosition(p5.createVector(x, y, z));

        generateFood();

        console.log(p5.width, p5.height)
        // 50% of the screen

        // p5.angleMode(p5.DEGREES)

    }

    const generateFood = () => {
        let x: number = generateRandomCoords(),
         y: number = generateRandomCoords(),
          z: number = generateRandomCoords();
        // console.log(x,y,z)
        let head = snake.getHeadOfSnake();
        const newPosition = p5.createVector(x, y, z);
        if (snake.colidesWith(head, newPosition)) {
            generateFood()
        } else {
            food.setPosition(newPosition);
        }
        

    }

    const generateRandomCoords = () => {
         return p5.round(p5.random(-CELLS_RIGHT_OF_CENTER, CELLS_RIGHT_OF_CENTER)) * cellWidth;
    }

    p5.draw = () => {
        p5.background(200); //
        // p5.scale(0.1)
        p5.pointLight(255, 255, 255, -p5.width, -boxWidth * 0.7, p5.width)
        // p5.ambientLight(100);
        // p5.ambientMaterial(100)
        p5.frameRate(5)

        // p5.smooth();

        // console.log(p5.map(p5.mouseY, 0, p5.height, 0, p5.max(p5.windowWidth, p5.windowHeight) * 0.7))
        // p5.orbitControl();
        // p5.push()

        // console.log((p5.height/2.0) / p5.tan(p5.PI*30.0 / 180.0))

        // figure out final values
        p5.camera(-p5.width, -boxWidth * 0.7, p5.width, 0, 0, 0, 0, 1, 0);
        // p5.frameRate(10)

        // p5.camera(0, 0, 0, 0,)
        // p5.fill(0)
        // p5.plane(500, 500,)
        gamePlane.drawGamePlane();

        snake.update();

        if (snake.isEating(food)) {
            // console.log('Eating food');
            generateFood() // generateFoodCoords
            // snake.setDidEatFood(true) // figure this our
        }

        if (snake.isLeavingGamePlane(boxWidth) || snake.isInBody()) {
            snake = generateNewSnake(); // figure ot better way
            generateFood();
            // same thing for food?? 
            // p5.noLoop();
            // console.log('left');
        }
        // console.log()

        snake.show();
        snake.drawShadow(snake.getBody(), boxWidth);

        food.show();

        score.show();
        // figure out better way to use this method
        // food.drawShadow([food.getPosition()], boxWidth)
        // call here?
        // score = snake.getSnakeLength();

        score.setScore(snake.getSnakeLength());
        // p5.pop()

    }

    const generateNewSnake = (): Snake => new Snake(p5, cellWidth);
    const generateNewFood = (): Food => new Food(p5, cellWidth);
    const generateNewGamePlane = (): GamePlane => new GamePlane(p5, righterMostCellCenter, cellWidth);

    p5.keyPressed = () => {
        //  nof going in the same way it came (not eating itself)
        // console.log(p5.key);
        //  console.log(p5.keyCode)
        // do not really need to check
        const newDirection: p5.Vector = keyMap[p5.key.toLowerCase()];
        // console.log(newDirection)
        if (newDirection) {
            // try and use constructor static method for Vector
            
            // const opposingDirection: p5.Vector = newDirection.copy().mult(-1);    
            const opposingDirection: p5.Vector = Vector.mult(snake.getDirection(), -1);     
            // console.log(newDirection)
            // console.log(opposingDirection)
            // console.log(newDirection.equals(opposingDirection))
            if (!newDirection.equals(opposingDirection)) {
                snake.setDirection(newDirection);
            }
        }

    }


}

new p5(sketch);