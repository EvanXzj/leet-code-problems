const findComplement = (num) => {
  num = num.toString(2).replace(/[0|1]/g, (match) => {
    return Number(match) ^ 1
  })

  return parseInt(num, 2)
}

console.time('b')
console.log(findComplement(1000000000))
console.timeEnd('b')
