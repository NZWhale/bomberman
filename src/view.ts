import { Wall } from "./wallModel"

export const drawPlayground = (context: CanvasRenderingContext2D, backgroundColor: string, playgroundWidth: number, playgroundHeight: number) => {
    context.fillStyle = backgroundColor
    context.fillRect(0, 0, playgroundWidth, playgroundHeight)
}

export const drawWallsOnPlayground = (context: CanvasRenderingContext2D, drawingText: string, walls: Array<Wall>, playgroundHeight: number, playgroundWidth: number) => {

    walls.forEach(wall => {
        const wallCoordinates = wall.getWallCoordinates()
        const wallLength = wall.getWallLength()
        if (wallCoordinates[1] === 0 && wallCoordinates[0] < playgroundWidth - 20) {
            for (let i = 0; i < wallLength; i++) {
                context.fillText(drawingText, wallCoordinates[0] + 17, wallCoordinates[1] + i * 13)
            }
        }
        if (wallCoordinates[1] === playgroundHeight && wallCoordinates[0] < playgroundWidth - 20)
            for (let i = 0; i < wallLength; i++) {
                context.fillText(drawingText, wallCoordinates[0] - 17, wallCoordinates[1] - i * 13)
            }
    })
}

export const drawBoxesOnPlayground = () => {

}

export const drawPlayerOnPlayground = () => {

}

export const drawEnemiesOnPlaygroind = () => {

}

export const drawBombOnPlayground = () => {

}