const { isPalindrome } = require('./is_palindrome')

describe('isPalindrome', () => {
    it('should work :)', () => {
        const samples = [
            { input: 121, expected: true },
            { input: -121, expected: false },
            { input: 1, expected: true },
            { input: 123, expected: false },
        ]

        for (const { input, expected } of samples) {
            expect(isPalindrome(input, expected)).toBe(expected)
        }
    })
})
 