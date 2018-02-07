var decimalToBinary = function(num) {
  var result = []
  var temp

  while (num / 2 > 0) {
    temp = num % 2
    result.push(temp)
    num = Math.floor(num / 2)
  }

  return result.reverse().join('')
}

var hammingDistance = function(x, y) {
  x = decimalToBinary(x)
  y = decimalToBinary(y)
  var maxLen = Math.max(x.length, y.length)
  x = x.padStart(maxLen, '0')
  y = y.padStart(maxLen, '0')

  console.log(x, y, maxLen)
  var count = 0
  var index = 0
  while (true) {
    if (x[index] !== y[index]) {
      count++
    }

    if (index === maxLen) {
      break
    }
    index++
  }

  return count
}

console.log(hammingDistance(4, 400))
