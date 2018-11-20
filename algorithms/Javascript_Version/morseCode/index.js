// TODO: find a better way
const uniqueMorseRepresentations = function(words) {
  const MORSE = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..'
  ]
  words = words.slice(0, 100)

  const set = new Set()
  let len, index, str
  for (let i = 0; i < words.length; i++) {
    str = ''
    words[i] = words[i].toLowerCase()
    len = Math.min(words[i].length, 100)
    for (let j = 0; j < len; j++) {
      index = words[i][j].charCodeAt(0) - 'a'.charCodeAt(0)
      str += MORSE[index]
    }
    set.add(str)
  }
  return set.size
}
