/*
! Two sum 

TODO : Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. 
TODO : You may assume that each input would have exactly one solution, and you may not use the same element twice.
TODO : You can return the answer in any order.

* Example :
* Input: nums = [2,7,11,15], target = 9
* Output: [0,1]
* Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

var twoSum = function (nums, target) {
    let sum = 0
    for (let i = 0; i < nums.length - 1; i++) {
        sum = nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j]
            if (sum === target) {
                return [i, j]
            } else {
                sum = nums[i]
            }
        }
    }
}

module.exports = {
    twoSum,
}
