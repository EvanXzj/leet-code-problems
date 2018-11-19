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
    myMap.set(nums[i], i) // 问题1： 如果相同的元素，只会保存最后一个元素的下标值， 如果这题变成求所有的组合应该怎么做？
  }

  for (let i = 0; i < nums.length; i++) {
    temp = target - nums[i]

    if (myMap.has(temp) && myMap.get(temp) !== i) {
      // 问题2：  [2, 4, 4, 5],  应该输出[0, 1], 结果输出了[0,2]
      return [i, myMap.get(temp)]
    }
  }
}

// 在遍历插入元素到哈希表的同时去判断是否存在可用结果， 可以解决上面的问题2
const twoSum3 = (nums, target) => {
  const map = new Map()

  let remainder
  for (let i = 0; i < nums.length; i++) {
    remainder = target - nums[i]

    if (map.has(remainder)) {
      return [map.get(remainder), i]
    }

    map.set(nums[i], i)
  }

  return 'No elements was found'
}

// 哈希表中直接存每个元素所需要的值。need = target - nums[i]
var twoSum4 = (nums, target) => {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const need = nums[i]

    if (map.has(need)) {
      return [map.get(need), i]
    }

    map.set(target - nums[i], i)
  }

  throw new Error('No two sum solution')
}

let nums = [
    3,
    2,
    4,
    5,
    9,
    10,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    53,
    12,
    252,
    331,
    123,
    123,
    123,
    12,
    123,
    53,
    12343,
    8,
    11,
    64,
    55,
    59,
    13,
    21,
    33,
    40,
    73,
    81,
    69,
    4
  ],
  target = 6
console.time('twoSum')
console.log(twoSum(nums, target))
console.timeEnd('twoSum')

console.time('twoSum2')
console.log(twoSum2(nums, target))
console.timeEnd('twoSum2')

console.time('twoSum3')
console.log(twoSum3(nums, target))
console.timeEnd('twoSum3')

console.time('twoSum4')
console.log(twoSum4(nums, target))
console.timeEnd('twoSum4')
