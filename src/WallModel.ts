import {getRandomInRange} from "./utils"
import { Playground } from "./PlaygroundModel"


export class Wall{
    private wallCoordinates: Array<number>
    private wallLength: number

    private initWallCoordinations(Playground) {
        const xPoint = getRandomInRange(0, Playground.getPlaygroundSize()[0])
        const yPoint = getRandomInRange(0, Playground.getPlaygroundSize()[1])
        this.wallCoordinates.push(xPoint, yPoint)
    }

    private initWallLength() {
        const wallLength = getRandomInRange(0, 5)
        this.wallLength = wallLength
    }

    getWallCoorditanes() {
        return this.wallCoordinates
    }

    getWallLength() {
        return this.wallLength
    }
}