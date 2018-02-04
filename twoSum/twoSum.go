package main

import (
	"fmt"
)

var twoSum = func(nums []int, target int) []int {
	length := len(nums)
	var arr = []int{0, 0}
	for i := 0; i < length; i++ {
		for j := i + 1; j < length; j++ {
			if nums[j] == target-nums[i] {
				arr[0] = i
				arr[1] = j
			}
		}
	}

	return arr
}

func main() {
	nums := []int{3, 2, 4}
	target := 6

	fmt.Println(twoSum(nums, target))
}
