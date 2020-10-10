import {getRandomInRange, generateWallsLength, getRandomInRangeForYPosition} from "./utils"
import { Playground } from "./PlaygroundModel"


export class Wall{
    private wallCoordinates: Array<number> = []
    private wallLength: number = 0

    constructor() {
        this.wallCoordinates = this.initWallCoordinations(Playground)
        this.wallLength = this.initWallLength()
    }

    private initWallCoordinations(Playground) {
        const xPoint = getRandomInRange(0, 600)
        const yPoint = getRandomInRangeForYPosition(0, 300)
        // const xPoint = getRandomInRange(0, Playground.getPlaygroundWidth())
        // const yPoint = getRandomInRange(0, Playground.getPlaygroundHeigth())
        return [xPoint, yPoint]
    }

    private initWallLength() {
        const wallLength = generateWallsLength(5, 10)
        return wallLength
    }

    getWallCoordinates() {
        return this.wallCoordinates
    }

    getWallXPosition() {
        return this.wallCoordinates[0]
    }

    getWallYPosition() {
        return this.wallCoordinates[1]
    }

    getWallLength() {
        return this.wallLength
    }
}