import { Body } from "./Body";
import p5 from 'p5';


export class Food extends Body {
    constructor(p5: p5, size: number) {
        super(p5, size);
        
        
    }

    

    public show() {
        
        // this.p5.rectMode(this.p5.CENTER);
        
        // this.p5.rotateX(this.angle)
        // this.p5.rotateY(this.angle * 0.4)

            // location
            this.drawAtLocation(this.location, () => {
                this.p5.noStroke();
                this.p5.fill(255, 0, 0)
                this.p5.box(this.getSize())
            })
        
    }
}