/*
! Palindrome Number

TODO : Given an integer x, return true if x is palindrome integer.

? An integer is a palindrome when it reads the same backward as forward.

* Examples : 
* Input: x = 121
* Output: true
* Explanation: 121 reads as 121 from left to right and from right to left. 

* Input: x = -121
* Output: false
* Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
*/

var isPalindrome = function (x) {
    let isPalindromeBoolean = true
    if (x < 0) return false
    var array = x.toString().split('')
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[array.length - i - 1])
            isPalindromeBoolean = false
    }
    return isPalindromeBoolean
}

module.exports = {
    isPalindrome,
}
