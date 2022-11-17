const { lengthOfLongestSubstring } = require('./length_of_longest_substring')

describe('lengthOfLongestSubstring', () => {
    it('should work :', () => {
        const samples = [
            { input: 'abcabcbb', expected: 'abc' },
            { input: 'bbbbb', expected: 'b' },
            { input: 'pwwkew', expected: 'wke' },
        ]
        for (const { input, expected } of samples) {
            expect(lengthOfLongestSubstring(input)).toEqual(expected)
        }
    })
})
