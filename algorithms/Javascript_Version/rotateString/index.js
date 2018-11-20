// We are given two strings, A and B.

// A shift on A consists of taking string A and moving the leftmost character to the rightmost position.
// For example, if A = 'abcde', then it will be 'bcdea' after one shift on A.
// Return True if and only if A can become B after some number of shifts on A.

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
const rotateString = function(A, B) {
  return (A + A).includes(B) && A.length === B.length
}

// test
const [A, B] = ['abcde', 'cdeab']
console.log(rotateString(A, B))

const [C, D] = ['abcde', 'abced']
console.log(rotateString(C, D))
