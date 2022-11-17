const { getSubArrayNumber } = require('./get_sub_array_number')

describe('getSubArrayNumber', () => {
    it('should work :)', () => {
        const samples = [
            { array: [1, 1, 1], k: 2, expected: 2 },
            { array: [1, 2, 3, 0, 3], k: 3, expected: 5 },
            { array: [4, 2, 9, 7, 19], k: 5, expected: 0 },
            { array: [1, -1, 2], k: 2, expected: 2 },
        ]

        for (const { array, k, expected } of samples) {
            expect(getSubArrayNumber(array, k)).toBe(expected)
        }
    })
})
 