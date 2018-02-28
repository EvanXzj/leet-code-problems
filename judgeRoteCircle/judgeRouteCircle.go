package main

import (
	"fmt"
)

var judgeCircle = func(moves string) (ret bool) {
	steps := []byte(moves)
	x, y := 0, 0

	for _, v := range steps {
		step := string(v)
		fmt.Println(step)
		if step == "U" {
			y++
		} else if step == "D" {
			y--
		} else if step == "L" {
			x--
		} else if step == "R" {
			x++
		}
	}
	return x == 0 && y == 0
}

func main() {
	moves := "UD"
	result := judgeCircle(moves)

	fmt.Println(result)

	moves = "LL"
	result = judgeCircle(moves)

	fmt.Println(result)
}
