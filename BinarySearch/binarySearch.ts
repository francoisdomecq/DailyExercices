function search(nums: number[], target: number): number {
    let leftPointer: number = 0;
    let rightPointer: number = nums.length-1;
    while (leftPointer <= rightPointer) {
        let middle = Math.floor((leftPointer + rightPointer) / 2);
        
        if (target < nums[middle]) {
            rightPointer = middle - 1;
        } else if (target > nums[middle]) {
            leftPointer = middle + 1;
        } else return middle;
    }
    return -1;
}

let nums = [-1, 0, 3, 5, 9, 12];

console.log(search(nums, 9));
