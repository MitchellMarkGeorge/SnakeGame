import p5 from 'p5'
import { Body } from './Body'


export class GamePlane extends Body {

    // static readonly CELLS_PER_DIMENSION: number = 11;
    // static readonly CELLS_RIGHT_OF_CENTER;
    righterMostCellCenter: number
    cellWidth: number
    showGrid: boolean
    // CELLS_PER_DIMENSION 
    constructor(p5: p5, righterMostCellCenter, cellWidth, showGrid = false) {
        super(p5);
        this.righterMostCellCenter = righterMostCellCenter;
        this.cellWidth = cellWidth;
        this.showGrid = showGrid;
        // for debugging

    }

    public drawGamePlane(): void {

        this.p5.stroke(128, 128, 128);

        const largestCoordinateValue = this.righterMostCellCenter + this.cellWidth / 2;
        const smallestCoordinateValue = -largestCoordinateValue;
        const q = this.p5.TWO_PI / 4;

        const draw = (vector: p5.Vector, xRotation: number, yRotation: number) => {
            this.drawAtLocation(vector, () => {
                this.p5.rotateX(xRotation)
                this.p5.rotateY(yRotation);
                this.p5.fill(128, 128, 128);
                if (!this.showGrid) this.p5.noStroke();
                // this.p5.stroke(1)
                // this.p5.rect()
                // this.p5.normalMaterial();
                this.p5.plane(largestCoordinateValue * 2, largestCoordinateValue * 2)

                if (this.showGrid) {
                    for (let v = smallestCoordinateValue; v <= largestCoordinateValue; v += this.cellWidth) {
                        // this.p5.stroke(125)
                        this.p5.line(smallestCoordinateValue, v, 0, largestCoordinateValue, v, 0)
                        // this.p5.plane()
                        this.p5.line(v, smallestCoordinateValue, 0, v, largestCoordinateValue, 0)
                    }
                }
                // for (let v = smallestCoordinateValue; v<=largestCoordinateValue; v += this.cellWidth) {
                //     // this.p5.stroke(125)
                //     this.p5.line(smallestCoordinateValue, v, 0, largestCoordinateValue, v, 0)
                //     // this.p5.plane()
                //     this.p5.line(v, smallestCoordinateValue, 0, v, largestCoordinateValue, 0)
                // }
            })
        }

        let wallTransformations = [
            { vector: this.p5.createVector(0, 0, smallestCoordinateValue), xRotation: 0, yRotation: 0 },
            { vector: this.p5.createVector(largestCoordinateValue, 0, 0), xRotation: 0, yRotation: q },
            { vector: this.p5.createVector(0, largestCoordinateValue, 0), xRotation: q, yRotation: 0 }
        ]

        wallTransformations.forEach(item => {
            draw(item.vector, item.xRotation, item.yRotation)

        })

    }
}