/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  var jArray = [...J]
  var sArray = [...S]
  var outPut = 0

  for (var i = 0; i < jArray.length; i++) {
    for (var j = 0; j < sArray.length; j++) {
      if (jArray[i] == sArray[j]) outPut++
    }
  }

  return outPut
}

var numJewelsInStones2 = (J, S) => {
  let jSet = new Set([...J])
  sArray = [...S]
  outPut = 0

  for (let value of sArray) {
    if (jSet.has(value)) {
      outPut++
    }
  }
  return outPut
}

console.time('A')
console.log(numJewelsInStones('aA', 'aAAbbbb'))
console.timeEnd('A')

console.time('B')
console.log(numJewelsInStones2('aA', 'aAAbbbb'))
console.timeEnd('B')
