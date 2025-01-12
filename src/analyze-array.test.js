import { analyzeArray } from "./analyze-array";

describe('analyzeArray function', () => {
    it('should return an object', () => {
        let arr = [1, 2, 3]
        expect(analyzeArray(arr)).toBeInstanceOf(Object);
    })

    it('should contain minimum of array', () => {
        let arr = [2, 3, 1];
        expect(analyzeArray(arr)).toEqual({
            min: 1
        })
    })

    it('should contain maximum of array', () => {
        let arr = [2, 3, 1];
        expect(analyzeArray(arr)).toEqual({
            min: 1,
            max: 3
        })
    })
})