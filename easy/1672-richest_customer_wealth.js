/**
 * Name: 1672. Richest Customer Wealth
 * Description: You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
 * Link: https://leetcode.com/problems/richest-customer-wealth/
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;
    let current = 0;
    
    for(let i = 0; i < accounts.length; i++) {
        for(let j = 0; j < accounts[i].length; j++) {
            current += accounts[i][j];
        }
        if(current > max) {
            max = current;
        }
        current = 0;
    }
    
    return max;
};