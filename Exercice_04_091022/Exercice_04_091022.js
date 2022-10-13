/*
! Find First and Last Position of Element in Sorted Array

TODO : Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
TODO : If target is not found in the array, return [-1, -1].
TODO : You must write an algorithm with O(log n) runtime complexity.

* Examples :
*
* Input: nums = [5,7,7,8,8,10], target = 8
* Output: [3,4]
*
* Input: nums = [5,7,7,8,8,10], target = 6
* Output: [-1,-1]
*/

var searchRange = function (nums, target) {
    const index = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            index.push(i)
        }
    }
    if (index.length > 0) return [index[0], index[index.length - 1]]
    else return [-1, -1]
}

module.exports = { searchRange }
 