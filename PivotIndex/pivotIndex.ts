var pivotIndex = function (nums: number[]) {
    let currentSum = 0;
    const sum = nums.reduce((acc, val) => acc + val);
    for (let i = 0; i < nums.length; i++) {
        console.log(currentSum, sum, nums[i]);
        if (currentSum === sum - currentSum - nums[i]) {
            return i;
        }
        currentSum += nums[i];
    }
    return -1;
};

const nums: number[] = [2, 3, 4, 1, 4];

console.log(pivotIndex(nums));
