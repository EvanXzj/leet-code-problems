let twoSum = function(nums, target) {
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

let twoSum2 = (nums, target) => {
  let myMap = new Map()
  let temp
  for (let i = 1; i < nums.length; i++) {
    myMap.set(nums[i], i)
  }

  for (let i = 0; i < nums.length; i++) {
    temp = target - nums[i]

    if (myMap.has(temp) && myMap.get(temp) !== i) {
      return [i, myMap.get(temp)]
    }
  }
}
let nums = [3, 2, 4, 5, 9, 10, 20, 44, 8, 11, 64, 55, 59, 13, 21, 33, 40, 73, 81, 69],
  target = 6
console.time('twoSum')
console.log(twoSum(nums, target))
console.timeEnd('twoSum')

console.time('twoSum2')
console.log(twoSum2(nums, target))
console.timeEnd('twoSum2')
