var isPalindrome = function(x) {
    let isPalindromeBoolean = true;
    if(x<0)
        return false;
    var array  = x.toString().split('');
    for(let i=0;i<array.length;i++){
        if(array[i]!==array[array.length-i-1])
            isPalindromeBoolean=false;
    }
    return isPalindromeBoolean;
};

module.exports={
    isPalindrome
}