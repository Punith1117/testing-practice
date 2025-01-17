import { caesarCipher } from "./caesar-cipher";

describe('Caesar-Cipher function', () => {
    it('should return ciphered text', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc')
    })

    it('should return correct outputs for different inputs', () => {
        expect(caesarCipher('abc', 3)).toBe('def')
    })

    it('should not alter punctuations', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
    })
})