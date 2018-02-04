var twoSum = function(nums, target) {
  if (nums.includes(target)) {
    return [nums.indexOf(target)]
  } else {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] === target - nums[i]) {
          return [i, j]
        }
      }
    }
  }

  return 'no two elements adds equal target'
}

let nums = [3, 2, 4],
  target = 3

console.log(twoSum(nums, target))
