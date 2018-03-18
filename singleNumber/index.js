// Given an array of integers, every element appears twice except for one. Find that single one.

// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

const singleNumber = function(nums) {
  // return nums.filter(val => nums.indexOf(val) === nums.lastIndexOf(val))[0]  //  Time Limit Exceeded

  //   nums = nums.sort()
  //   for (let i = 0; i < nums.length; i += 2) {
  //     if (nums[i] !== nums[i + 1]) {
  //       return nums[i]
  //     }
  //   }

  return nums.reduce((prev, curr) => prev ^ curr, 0)
}
