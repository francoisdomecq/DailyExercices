var { pascalTriangle } = require('./pascal_triangle')

describe('pascalTriangle', () => {
    it('should work :', () => {
        const samples = [
            { input: 1, expected: [[1]] },
            { input: 2, expected: [[1], [1, 1]] },
            { input: 4, expected: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]] },
        ]
        for (const { input, expected } of samples) {
            expect(pascalTriangle(input)).toEqual(expected)
        }
    })
})
 