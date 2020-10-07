import {getRandomInRange} from "./utils"
import {Playground} from "./PlaygroundModel"

class Box {
    private boxCoordinates: Array<number>
    private boxLength: number

    private InitBoxCoordinations(Playground) {
        const xPoint = getRandomInRange(0, Playground.getPlaygroundSize()[0])
        const yPoint = getRandomInRange(0, Playground.getPlaygroundSize()[1])
        this.boxCoordinates.push(xPoint, yPoint)
    }

    private initBoxLength() {
        const boxLength = getRandomInRange(0, 5)
        this.boxLength = boxLength
    }

    getBoxCoorditanes() {
        return this.boxCoordinates
    }

    getBoxLength() {
        return this.boxLength
    }
}