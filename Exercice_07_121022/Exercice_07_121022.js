/*
! Remove Element

TODO : Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
TODO : The relative order of the elements may be changed.
TODO : Return k, the length of nums after removing element(s).
TODO : Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory. 

* Example : 
* Input: nums = [3,2,2,3], val = 3
* Output: 2, nums = [2,2]
* Explanation: Your function should return k = 2, with the first two elements of nums being 2.
*/

var removeElement = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length
}

module.exports = {
    removeElement,
}
