import { getRandomInRange } from "./utils"

export class Playground {
    private width: number
    private height: number

    constructor(width: number, height: number){
        this.width = width
        this.height = height
    }

    getPlaygroundWidth() {
        return this.width
    }

    getPlaygroundHeight() {
        return this.height
    }
}
