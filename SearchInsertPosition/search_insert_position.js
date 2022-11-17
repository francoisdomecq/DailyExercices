/*
! Search Insert Position 
TODO : Given a sorted array of distinct integers and a target value, return the index if the target is found. 
TODO : If not, return the index where it would be if it were inserted in order.
TODO : You must write an algorithm with O(log n) runtime complexity.

* Examples : 
* Input: nums = [1,3,5,6], target = 5
* Output: 2

* Input: nums = [1,3,5,6], target = 2
* Output: 1
*/

var searchInsert = function (nums, target) {
    if (target < nums[0]) {
        return 0
    } else if (target > nums[nums.length - 1]) {
        return nums.length
    } else {
        for (let i = 0; i <= nums.length - 1; i++) {
            if (nums[i] === target) {
                return i
            } else if (nums[i] < target && nums[i + 1] > target) {
                return i + 1
            }
        }
    }
}

module.exports = {
    searchInsert,
}
