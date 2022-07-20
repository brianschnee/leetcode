/**
 * Name: Fizz Buzz
 * Description: Given an integer n, return a string array answer (1-indexed) where:
 *    - answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 *    - answer[i] == "Fizz" if i is divisible by 3.
 *    - answer[i] == "Buzz" if i is divisible by 5.
 *    - answer[i] == i (as a string) if none of the above conditions are true.
 * Link: https://leetcode.com/problems/fizz-buzz/
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let ans = [];
    
    for (let i = 1; i <= n; i++) {   
        if(i % 15 === 0) {
            ans.push('FizzBuzz');
        } else if (i % 3 === 0) {
            ans.push('Fizz');
        } else if (i % 5 === 0) {
            ans.push('Buzz');
        } else {
            ans.push(i + '');
        }
    }
    
    return ans;
};