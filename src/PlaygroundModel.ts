import { getRandomInRange } from "./utils"

export class Playground {
    private width: number
    private heigth: number

    constructor(width: number, heigth: number){
        this.width = width
        this.heigth = heigth
    }

    getPlaygroundSize() {
        return [this.width, this.heigth]
    }
}
