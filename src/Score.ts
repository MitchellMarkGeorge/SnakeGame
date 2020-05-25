import  p5  from 'p5';
import { Body } from './Body';


export class ScoreText extends Body {

    private score: number;
    private scoreElement: HTMLSpanElement
    // private graphics: p5.Graphics
    
    constructor(p5: p5) {
        super(p5);

        this.scoreElement = document.querySelector('#score span');

        // this.graphics = p5.createGraphics(200, 200);
        // this.graphics.background(255);
        // this.graphics.textAlign(p5.CENTER);
        // this.graphics.textSize(16);

        // this.setPosition(this.p5.createVector(this.p5.width * 0.2, this.p5.height * 0.2, 0))


    }

    public setScore(text: number): void {
        this.score = text;
    }

    public show(): void {
        // this.drawAtLocation(this.getPosition(), () => {
            

            this.scoreElement.textContent = ` ${this.score}`;
            // this.p5.plane(200, 200);
            // this.p5.text(`Score: ${this.text}`, this.p5.width * 0.2, this.p5.height * 0.2,);
        // })
    }
}