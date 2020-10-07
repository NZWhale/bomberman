class Bomb {
    private correntCoordinates: Array<number>
    private isExploded: boolean = false

    setTheBomb(xCoordinates: number, yCoordinates: number) {
        this.correntCoordinates[0] = xCoordinates
        this.correntCoordinates[1] = yCoordinates
        setTimeout(() => {
            this.isExploded = true
        }, 5000);
    }

    getBombCoordinates() { // this method we will use, when page is rendering
        return this.correntCoordinates
    }
}