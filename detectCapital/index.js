// Given a word, you need to judge whether the usage of capitals in it is right or not.

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital if it has more than one letter, like "Google".
// Otherwise, we define that this word doesn't use capitals in a right way.

/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = function(word) {
  return word.toUpperCase() === word || word === word[0] + word.substr(1).toLowerCase()
}

// test
const [word1, word2, word3, word4] = ['spell', 'Spell', 'SpelL', 'SPELL']
console.log(detectCapitalUse(word1))
console.log(detectCapitalUse(word2))
console.log(detectCapitalUse(word3))
console.log(detectCapitalUse(word4))
