import { Playground } from "./PlaygroundModel"
import { Wall } from "./wallModel"
import { Box } from "./BoxModel"
import { drawPlayground, drawWallsOnPlayground } from "./view"

const CANVAS = <HTMLCanvasElement>document.getElementById("playground")
const ctx = CANVAS.getContext("2d")
const playground: Playground = new Playground(600, 300)
const backgroundColor: string = "purple"
const wallEmoj: string = "🔲🔲"
const walls: Array<Wall> = []
const wallsAmmount: number = 8

const checkDistanceBetweenWalls = () => {
    const checkingWalls = []
    for (let i = 0; i < wallsAmmount; i++) {
        const wall = new Wall()
        checkingWalls.push(wall)
    }
    for (let i = 0; i < checkingWalls.length; i++) {
        const firstWall = checkingWalls[i]
        for (let j = i + 1; j < checkingWalls.length; j++) {
            const secondWall = checkingWalls[j]
            if (firstWall.getWallXPosition() - secondWall.getWallXPosition() < 50 && firstWall.getWallXPosition() - secondWall.getWallXPosition() > -50) {
                checkingWalls.splice(j, 1)
            }
        }
    }
    checkingWalls.forEach(checkingWall => walls.push(checkingWall))
}



const box = new Box()


CANVAS.width = playground.getPlaygroundWidth()
CANVAS.height = playground.getPlaygroundHeight()

checkDistanceBetweenWalls()
drawPlayground(ctx, backgroundColor, CANVAS.width, CANVAS.height)
drawWallsOnPlayground(ctx, wallEmoj, walls, playground.getPlaygroundHeight(), playground.getPlaygroundWidth())

