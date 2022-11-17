var { searchRange } = require('./search_range')

describe('searchRange', () => {
    it('should work : ', () => {
        const samples = [
            { nums: [5, 7, 7, 8, 8, 10], target: 8, expected: [3, 4] },
            { nums: [], target: 0, expected: [-1, -1] },
            { nums: [5, 7, 7, 8, 8, 10], target: 6, expected: [-1, -1] },
        ]
        for (const { nums, target, expected } of samples) {
            expect(searchRange(nums, target)).toEqual(expected)
        }
    })
})
 