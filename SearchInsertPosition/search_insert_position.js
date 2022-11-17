/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    if(target<nums[0]){
        return 0
    }
    else if(target>nums[nums.length-1]){
        return nums.length
    }
    else{
        for(let i=0;i<=nums.length-1;i++){
         if(nums[i]===target){
            return i
        }
        else if(nums[i]<target && nums[i+1]>target){
            return i+1;
        }
    }
    }
};

module.exports ={
    searchInsert
}