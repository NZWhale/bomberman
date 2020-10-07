
function roundTo5(num: number) {
    return Math.round(num/5)*5;
}

export function getRandomInRange(min: number, max: number): number {
    const random = Math.floor(Math.random() * (max - min + 1)) + min
    return roundTo5(random)
}
