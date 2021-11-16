export default (numerator: number, denominator: number): number => {
    const gcdFn = (a: number, b: number): number => {
        return b ? gcdFn(b, a % b) : a
    }
    return gcdFn(numerator, denominator)
}
