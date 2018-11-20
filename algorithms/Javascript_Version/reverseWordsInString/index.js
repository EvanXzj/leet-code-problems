const reverseWords = (str) =>
  str
    .split(' ')
    .map((val) =>
      val
        .split('')
        .reverse()
        .join('')
    )
    .join(' ')

console.log(reverseWords(`Let's take LeetCode contest`))
