import { analyzeArray } from "./analyze-array";

describe('analyzeArray function', () => {
    it('should return an object', () => {
        let arr = [1, 2, 3]
        expect(analyzeArray(arr)).toBeInstanceOf(Object);
    })

    it('should contain minimum of array', () => {
        let arr = [2, 3, 1];
        expect(analyzeArray(arr)).toHaveProperty('min', 1)
    })

    it('should contain maximum of array', () => {
        let arr = [2, 3, 1];
        expect(analyzeArray(arr)).toHaveProperty('max', 3)
    })

    it('should contain average of array', () => {
        let arr = [1, 2, 3, 4, 5];
        expect(analyzeArray(arr)).toHaveProperty('average', 3)
    })

    it('should contain length of array', () => {
        let arr = [1, 2, 3];
        expect(analyzeArray(arr)).toHaveProperty('length', 3)
    })
})