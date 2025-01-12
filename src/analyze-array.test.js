import { analyzeArray } from "./analyze-array";

describe('analyzeArray function', () => {
    it('should return an object', () => {
        let arr = [1, 2, 3]
        expect(analyzeArray(arr)).toBeInstanceOf(Object);
    })
})