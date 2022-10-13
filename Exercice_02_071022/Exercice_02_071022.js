/*
! Longest substring without repeating characters

TODO : Given a string s, find the longest substring without repeating characters. 
TODO : s consists of English letters, digits, symbols and spaces.

* Example :
* Input: s = "abcabcbb"
* Output: "abc"
* Explanation: The answer is "abc", with the length of 3.
*/

var lengthOfLongestSubstring = function (s) {
    let stringToArray = s.split('')
    let subArray = []
    let subArrays = []
    for (let i = 0; i < stringToArray.length; i++) {
        if (!subArray.includes(stringToArray[i]))
            subArray.push(stringToArray[i])
        else {
            subArrays.push(subArray)
            subArray = [stringToArray[i]]
        }
    }
    if (subArray.length > 0) subArrays.push(subArray)
    return subArrays.sort((a, b) => b.length - a.length)[0].join('')
}

module.exports = {
    lengthOfLongestSubstring,
}
