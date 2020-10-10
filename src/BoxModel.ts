import {getRandomInRange} from "./utils"
import {Playground} from "./PlaygroundModel"

export class Box {
    private boxCoordinates: Array<number>
    private boxHeigth: number
    private boxWidth: number = 1

    constructor() {
        this.initBoxCoordinations
        this.initBoxHeigth
        // this.initBoxWidth
    }

    private initBoxCoordinations(Playground) {
        const playgroundHeigth: number = Playground.getPlaygroundHeight()
        const playgroundWidth: number = Playground.getPlaygroundWidth()
        const xPoint = getRandomInRange(0, playgroundHeigth)
        const yPoint = getRandomInRange(0, playgroundWidth)
        this.boxCoordinates.push(xPoint, yPoint)
    }

    private initBoxHeigth() {
        const boxHeigth = getRandomInRange(0, 5)
        this.boxHeigth = boxHeigth
    }

    // private initBoxWidth() {
    //     const boxWidth = getRandomInRange(0, 5)
    //     this.boxWidth = boxWidth
    // }

    getBoxCoorditanes() {
        return this.boxCoordinates
    }

    getBoxHeigth() {
        return this.boxHeigth
    }

    // getBoxWidth() {
    //     return this.boxWidth
    // }
}