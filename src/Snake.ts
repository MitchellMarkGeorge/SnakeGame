import { Food } from './Food';
import { Body } from './Body';
import p5, {Vector} from 'p5';


export class Snake extends Body {

    private body: Array<p5.Vector> = [];
    private didEatFood: boolean = false
    // private Bbody: p5.Vector[]
    // private ydir: number
    // private xdir: number
    // private speed: number
    // protected direction
    angle: number = 0;
    
    constructor(p5: p5, size?: number) {
        super(p5, size);
        // this.body = [];
        // this.Bbody.push()
        // this.direction = this.p5.createVector(0, 0, 0);
        // random x, y, x

        // should it start at 1
        this.body.push(this.p5.createVector(0, 0, 0))
        
    }



    public update(): void {
        // this.direction.add()
        
        // this.body[0].add(this.direction);
        const newHead = p5.Vector.add(this.getHeadOfSnake(), p5.Vector.mult(this.direction, this.getSize()));
        // this.body[0].add()
        this.body.unshift(newHead);
        // ;
        if (!this.didEatFood) {
            this.body.pop();
            
        }

        // this.setDidEatFood(false)
        if (this.didEatFood) {
            // this.setDidEatFood(false)
            this.didEatFood = false;
        }

        
        

    }

    public isInBody(): boolean {
        // only one must be true 
        // more than one item // use colodes with
        return this.body.some((bodyPart, index) => index > 0 && bodyPart.equals(this.getHeadOfSnake()))
    }

    public getDidEatFood(): boolean {
        return this.didEatFood;
    }

    public getBody(): Array<p5.Vector> {
        return this.body;
    } 

    public setDidEatFood(status: boolean) {
        this.didEatFood = status;
    }

    public getHeadOfSnake(): p5.Vector {
        return this.body[0] // figure this out
    } 

    
    public isEating(food: Food): boolean {
        this.didEatFood = food.getPosition().equals(this.getHeadOfSnake());
        return this.didEatFood;
    }

    

    

    public show(): void {

        // this.body.forEach((bodyItem) => {
            
        // })
        // p5.
        // this.p5.pointLight();
        
        // this.p5.rotateX(this.angle)
        // this.p5.rotateY(this.angle * 0.4)
        this.p5.noStroke();
        // this.p5.pointLight(255, 255, 255, 200, 200, 0)
        this.body.forEach(element => {
           
            this.drawAtLocation(element, () => {
                
                
                // this.p5.rectMode(this.p5.CENTER);
                this.p5.fill(0, 255, 0)
                this.p5.box(this.getSize())
                // this.p5.sphere(100)
            })
        });

        // this.drawAtLocation(this.direction, () => {
        //     this.p5.box(100)
        // })
        

        // this.angle += 0.07;
    }

    public reset() {

    }

    public isLeavingGamePlane(boxWidth: number): boolean {
        let head = this.getHeadOfSnake();
    
        return !head.array().every(coordinate => this.p5.abs(coordinate) < boxWidth / 2 ) 
    }

    public getSnakeLength(): number {
        return this.body.length;
    }
}