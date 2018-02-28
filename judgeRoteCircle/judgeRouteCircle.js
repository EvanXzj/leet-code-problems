// Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle,
// which means it moves back to the original place.
// The move sequence is represented by a string. And each move is represent by a character.
// The valid robot moves are R (Right), L (Left), U (Up) and D (down).
// The output should be true or false representing whether the robot makes a circle.

// Complexity Analysis:
// Time Complexity: O(N), where N is the length of moves. We iterate through the string.
// Space Complexity: O(1). In Java, our character array is O(N)

const judgeCircle = (moves) => {
  const steps = [...moves]
  let x = 0,
    y = 0

  for (let step of steps) {
    if (step === 'U') y++
    else if (step === 'D') y--
    else if (step === 'L') x--
    else if (step === 'R') x++
  }

  return x === 0 && y === 0
}

console.log(judgeCircle('UD'))
console.log(judgeCircle('LL'))
