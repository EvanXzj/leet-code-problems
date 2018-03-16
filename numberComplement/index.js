// TODO: find a better way
const decimalToBinary = function(num) {
  let result = []
  let temp
  num = num < 0 ? -num : num

  while (num / 2 > 0) {
    temp = num % 2
    result.push(temp)
    num = Math.floor(num / 2)
  }

  return result.reverse().join('')
}

const getComplement = (str) => {
  return [...str]
    .map((val) => {
      val = parseInt(val, 10)

      if (val === 0) {
        val = '1'
      } else {
        val = '0'
      }

      return val
    })
    .join('')
}

const findComplement = (num) => {
  let str = getComplement(decimalToBinary(num))
  return [...str].reverse().reduce((acc, currVal, currIdx) => acc + parseInt(currVal) * 2 ** currIdx, 0)
}

console.time('a')
console.log(findComplement(2123131131))
console.timeEnd('a')
