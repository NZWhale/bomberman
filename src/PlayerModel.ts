export class Player {
    currentCoordinates: Array<number> = [0, 0]
    isAlive: boolean = true
    
    
    setCorrentCoordinates(x: number, y: number) {
        this.currentCoordinates[0] = x
        this.currentCoordinates[1] = y
    }

    moveUp() {
        this.currentCoordinates[0] + 1
    }

    moveDown() {
        this.currentCoordinates[0] - 1
    }

    moveLeft() {
        this.currentCoordinates[1] - 1
    }

    moveRight() {
        this.currentCoordinates[1] + 1
    }

    playerDied() {
        this.isAlive = false
    }

    getAliveStatus() {
        return this.isAlive
    }
}