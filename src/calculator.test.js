import { Calculator } from "./calculator";

describe('calculator object', () => {
    let calc = new Calculator()
    it('should add two numbers', () => {
        expect(calc.add(3, 4)).toBe(7);
    })

    it('should subtract two numbers', () => {
        expect(calc.subtract(3, 4)).toBe(-1);
    })

    it('should divide two numbers', () => {
        expect(calc.divide(8, 4)).toBe(2);
    })
    
    it('should multiply two numbers', () => {
        expect(calc.multiply(3, 4)).toBe(12);
    })
})