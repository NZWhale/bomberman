
function roundTo5(num: number) {
    return Math.round(num / 5) * 5;
}


export function getRandomInRange(min: number, max: number): number {
    const random = Math.floor(Math.random() * (max - min + 1)) + min
    return roundTo5(random)
}


export function generateWallsLength(min: number, max: number): number {
    const random = Math.floor(Math.random() * (max - min + 1)) + min
    return random
}


export function getRandomInRangeForYPosition(min: number, max: number): number {
    const mid = max / 2
    const random = Math.floor(Math.random() * (max - min + 1)) + min
    if (random > mid) { return max } else { return min }
}
