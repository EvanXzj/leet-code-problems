var addTwoNumbers = function(l1, l2) {
  var a = parseInt(l1.join('').toString(), 10)
  var b = parseInt(l2.join('').toString(), 10)

  var temp = a + b
  temp = temp.toString()

  var result = [...temp].reverse().map((v) => parseInt(v, 10))

  return result
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))
