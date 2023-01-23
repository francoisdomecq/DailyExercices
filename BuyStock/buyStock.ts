const maxProfit = (prices: number[]): number => {
    let left: number = 0; // Buy
    let right: number = 1; // sell
    let max_profit: number = 0;
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            let profit: number = prices[right] - prices[left]; // our current profit

            max_profit = Math.max(max_profit, profit);
        } else {
            left = right;
        }
        right++;
    }
    return max_profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
