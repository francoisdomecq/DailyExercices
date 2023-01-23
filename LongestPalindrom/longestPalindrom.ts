function longestPalindrome(s: string): number {
    let occurences: Map<string, number> = new Map();
    for (let i = 0; i < s.length; i++) {
        const currentFrequency = occurences.get(s[i]);
        if (currentFrequency !== undefined) {
            occurences.set(s[i], currentFrequency + 1);
        } else {
            occurences.set(s[i], 1);
        }
    }
    let length = 0;
    for (const occurence of occurences.values()) {
        if (occurence != 1) {
            length += 2 * Math.floor(occurence / 2);
        }
    }
    return length == s.length ? length : length + 1;
}

console.log(longestPalindrome("aabbca"));
