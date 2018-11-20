/**
 *  描述： 两个超大整数相加
 *  来源： https://mp.weixin.qq.com/s/Quw4olmTYEE4qLCupld91A
 */

// console.log(2 ** 53 === 2 ** 53 + 1) // true

const numberA = '29007199254740992'
const numberB = ' 9007199254740999'

// 方法一: 使用bignuber.js库实现
const Bignumber = require('bignumber.js')
const resultA = new Bignumber(`${numberA}`).plus(`${numberB}`).toString()

// 方法二: 使用数组实现
function twoBigNumberAdd(numberA, numberB) {
  const arrayA = Array.from(`${numberA}`.trim(), (x) => parseInt(x)).reverse()
  const arrayB = Array.from(`${numberB}`.trim(), (x) => parseInt(x)).reverse()
  const resultArray = Array.from({length: Math.max(arrayA.length, arrayB.length) + 1}).fill(0)

  for (let index = 0; index < resultArray.length; index++) {
    let temp = resultArray[index]

    if (index < arrayA.length) {
      temp += arrayA[index]
    }

    if (index < arrayB.length) {
      temp += arrayB[index]
    }

    if (temp >= 10) {
      temp -= 10

      resultArray[index + 1] = 1
    }

    resultArray[index] = temp
  }

  const str = resultArray.reverse().join('')

  return str.startsWith('0') ? str.substr(1) : str
}

const resultB = twoBigNumberAdd(numberA, numberB)
console.log(resultB === resultA)
