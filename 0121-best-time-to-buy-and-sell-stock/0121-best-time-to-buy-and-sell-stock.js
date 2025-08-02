/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minValue = prices[0];
    let maxProfit = 0;
    for(let i = 1; i < prices.length ; i++){
        if((prices[i] - minValue) > maxProfit) maxProfit = prices[i] - minValue;
        if(prices[i] < minValue) minValue = prices[i]
    }
    return maxProfit;
};