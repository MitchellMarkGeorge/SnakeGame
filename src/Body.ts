import p5, { Vector } from "p5";

export class Body {
    // should they be protected
    private x: number
    private y: number
    private z: number
    protected direction?: p5.Vector
    protected location?: p5.Vector;
    // private body
    private size: number
    protected p5: p5
    constructor(p5: p5, size?: number) {
        this.size = size || 100;
        this.p5 = p5;

        // this.direction = this.p5.createVector(0, 0, 0);
        // this.location = this.p5.createVector(0, 0, 0);
        this.location, this.direction = this.p5.createVector(0, 0, 0)
    }

    public getX(): number {
        return this.x;
    }

    public getZ(): number {
        return this.z
    }

    public getY(): number {
        return this.y;
    }

    public getLoca

    public drawAtLocation(location: p5.Vector, callback: () => void) {

        this.p5.push();

        this.p5.translate(location);

        callback();
        this.p5.pop();
    }

    public setDirection(vector: p5.Vector) {
        this.direction = vector
        // this.direction = p5.Vector.mult()
    }

    public getDirection(): p5.Vector {
        return this.direction;
    }

    public setPosition(position: p5.Vector) {

        this.location = position

    }

    // public getPosition(): p5.Vector {
    //     return this.location
    // }

    public colidesWith(position1: p5.Vector, position2: p5.Vector): boolean {

        return position1.equals(position2);

    }

    public getPosition(): p5.Vector {
        return this.location
    }

    public getSize(): number {
        return this.size
    }

    public update(): void {

    }

    public drawShadow(positionArray: p5.Vector[], boxWidth: number): void {
        // this.drawAtLocation(position)

        const l = boxWidth / 2; // Largest coordinate value
        const s = -l; // Smallest

        // c


        positionArray.forEach((item) => {
            const { x, y, z } = item;

            this.p5.noStroke();
            this.p5.fill(0, 0, 0)
            const w = this.getSize();
            const f = 0.1; // Length on flat dimension

            
            // this.drawAtLocation(this.p5.createVector(l, y, z), () => this.p5.box(f, w, w));
            this.drawAtLocation(this.p5.createVector(x, l, z), () => this.p5.box(w, f, w));
            this.drawAtLocation(this.p5.createVector(x, y, s), () => this.p5.box(w, w, f));
        })


    }

    // public drawShadow(position: p5.Vector, boxWidth: number): void {
    //     // this.drawAtLocation(position)

    //     const l = boxWidth / 2; // Largest coordinate value
    //     const s = -l; // Smallest

    //     // c


        
    //         const { x, y, z } = position;

    //         this.p5.noStroke();
    //         this.p5.fill(0, 0, 0)
    //         const w = this.getSize();
    //         const f = 0.1; // Length on flat dimension

    //         this
    //         // this.drawAtLocation(this.p5.createVector(l, y, z), () => this.p5.box(f, w, w));
    //         this.drawAtLocation(this.p5.createVector(x, l, z), () => this.p5.box(w, f, w));
    //         this.drawAtLocation(this.p5.createVector(x, y, s), () => this.p5.box(w, w, f));
        


    // }

    public show(): void {

        // this.bo

    }
}