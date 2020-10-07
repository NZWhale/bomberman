import {getRandomInRange} from "./utils" 
import { Playground } from "./PlaygroundModel"

class Enemy {
    private currentCoordinates: Array<number> = [0, 0]
    isAlive: boolean = true

    constructor(xCoordinates: number, yCoordinates: number) {
        this.currentCoordinates[0] = xCoordinates
        this.currentCoordinates[1] = yCoordinates
    }

    move(playground: Playground) {
        this.currentCoordinates[0] = this.currentCoordinates[0] + getRandomInRange(0, 0) // here we need to set min and max field's X amount
        this.currentCoordinates[1] = this.currentCoordinates[1] + getRandomInRange(0, 0) // here we need to set min and max field's Y amount
    }
}