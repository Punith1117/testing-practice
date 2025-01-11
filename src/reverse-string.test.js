import { reverseString } from "./reverse-string";

describe('reverse string function', () => {
    it('should return a reversed string', () => {
        expect(reverseString('abc')).toBe('cba');
    });

    it('should return a reversed string for different inputs', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    it('should return null if no parameter is passed', () => {
        expect(reverseString()).toBeNull();
    });
})