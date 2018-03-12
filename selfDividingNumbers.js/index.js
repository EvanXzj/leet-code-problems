// https://leetcode.com/problems/self-dividing-numbers/description/
// A self-dividing number is a number that is divisible by every digit it contains.

const selfDividingNumbers = (left, right) => {
  left = left < 1 ? 1 : left
  right = right > 10000 ? 10000 : right
  if (left > right) {
    ;[left, right] = [right, left]
  }

  console.log(left, right)

  let result = [],
    temp = [],
    arr = null

  for (left; left <= right; left++) {
    arr = [...left.toString()]

    temp = arr.filter((val) => {
      let value = parseInt(val, 10)

      return !(left % value === 0)
    })

    if (temp.length === 0) {
      result.push(left)
    }
  }

  return result
}

console.log(selfDividingNumbers(1, 25))
