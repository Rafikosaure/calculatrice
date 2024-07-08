const { calculatrice } = require('./calculatrice.js')


describe("test on the calculator", () => {
    it('say the result of a simple addition', () => {
        expect(calculatrice("+", 3, 4)).toEqual(7)
    });
    it('say the result of a simple subtraction', () => {
        expect(calculatrice("-", 3, 2)).toEqual(1)
    });
    it('say the result of a simple multiplication', () => {
        expect(calculatrice("x", 3, 4)).toEqual(12)
    });
    it('say the result of a simple division', () => {
        expect(calculatrice("/", 6, 2)).toEqual(3)
    });
    it('try a division with a float result rounded down to the nearest hundredth', () => {
        expect(calculatrice("/", 10, 3)).toEqual(3.33)
    });
    it('try a division with a float result rounded up to the nearest hundredth', () => {
        expect(calculatrice("/", 10, 6)).toEqual(1.67)
    });
    it('try to divide a number by 0', () => {
        expect(calculatrice("/", 6, 0)).toBe(null)
    });
    it('try a calcul but with bad operator parameter', () => {
        expect(calculatrice("a", 3, 0)).toBe(null)
    });
    it('try a calcul but without passing necessary parameters', () => {
        expect(calculatrice()).toBe(null)
    })
})











