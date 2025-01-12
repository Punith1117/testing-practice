import { caesarCipher } from "./caesar-cipher";

describe('Caesar-Cipher function', () => {
    it('should return ciphered text', () => {
        expect(caesarCipher('xyz')).toBe('abc')
    })
})