function isSubsequence(s: string, t: string): boolean {
    if (s.length === 0) {
        return true;
    }
    let sIndex = 0;
    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[sIndex]) {
            sIndex++;
            if (sIndex === s.length) return true;
        }
    }
    return false;
}

console.log(isSubsequence("aaaaaa", "bbaaaa"));
