/**
 * Name: 1342. Number of Steps to Reduce a Number to Zero
 * Description: Given an integer num, return the number of steps to reduce it to zero. In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
 * Link: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let count = 0
    
    while(num > 0) {
        num = num % 2 ? num - 1 : num / 2
        count++
    }
    
    return count
};