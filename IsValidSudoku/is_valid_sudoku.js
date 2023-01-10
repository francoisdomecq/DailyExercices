var isValidSudoku = function (board) {
    let isValid = true
    let j = 0
    for (let i = 0; i < board.length; i++) {
        var valueToCheckRow = board[i][j]
        var valueToCheckColumn = board[j][i]
        let box = [
            board[3 * Math.floor(i / 3) + Math.floor(j / 3)][
                3 * (i % 3) + (j % 3)
            ],
        ]
        while (j < board.length - 1 && isValid === true) {
            j++
            box.push(
                board[3 * Math.floor(i / 3) + Math.floor(j / 3)][
                    3 * (i % 3) + (j % 3)
                ]
            )
            if (
                valueToCheckColumn === board[j][i] &&
                valueToCheckColumn !== '.'
            ) {
                isValid = false
            }
            if (valueToCheckRow === board[i][j] && valueToCheckRow !== '.') {
                isValid = false
            }
            if (box.length === 9) {
                isValid = boxFiltered =
                    box.filter((value, pos) => {
                        if (value === '.') return '.'
                        else return box.indexOf(value) === pos
                    }).length === box.length
            }
        }
        j = 0
        if (isValid === false) {
            return false
        }
    }
    return isValid
}

var board = [
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]

console.log(isValidSudoku(board))
