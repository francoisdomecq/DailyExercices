const { removeElement } = require('./Exercice_07_121022')

describe('removeElement', () => {
    it('should work :)', () => {
        const samples = [
            { array: [3, 2, 2, 3], val: 3, expectedNums: [2, 2] },
            {
                array: [0, 1, 2, 2, 3, 0, 4, 2],
                val: 2,
                expectedNums: [0, 1, 4, 0, 3],
            },
        ]

        for (const { array, val, expectedNums } of samples) {
            let k = removeElement(array, val)
            expect(k).toEqual(expectedNums.length)
        }
    })
})
