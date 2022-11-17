const { SearchInsert, searchInsert } = require('./search_insert_position')

describe('searchInsert', () => {
    it('should work :)', () => {
        const samples = [
            { array: [1, 3, 5, 6], target: 5, expected: 2 },
            {
                array: [1, 5, 6, 8],
                target: 0,
                expected: 0,
            },
            { array: [1, 3, 5, 6], target: 7, expected: 4 },
        ]

        for (const { array, target, expected } of samples) {
            expect(searchInsert(array, target)).toEqual(expected)
        }
    })
})
