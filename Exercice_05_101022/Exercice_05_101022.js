/*
! GetSubArrayNumber

TODO Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

* Examples:
* [1,1,1] et k=2 => output = 2
* [1,2,3,0,3] et k=3 => output = 5
* [4, 2, 9, 7, 19] et k=5 => output = 0
* [1, -1, 2] et k=2 ⇒ output = 2
*/

function getSubArrayNumber(arr, k) {
    let numbersOfArray = 0
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = 0
        for (let j = i; j < arr.length; j++) {
            sum += arr[j]
            if (sum === k) {
                numbersOfArray++
            }
        }
    }
    return numbersOfArray
}

module.exports = {
    getSubArrayNumber,
}
