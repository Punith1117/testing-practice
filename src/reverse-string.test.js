import { reverseString } from "./reverse-string";

describe('reverse string function', () => {
    it('should return a reversed string', () => {
        expect(reverseString('abc')).toBe('cba');
    });
})