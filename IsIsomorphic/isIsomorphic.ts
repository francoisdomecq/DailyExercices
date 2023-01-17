var isIsomorphic = function (s: string, t: string): boolean {
    const map: Map<string, string> = new Map();
    const set: Set<string> = new Set();
    for (let i = 0; i < s.length; i++) {
        let x: string = s[i];
        let y: string = t[i];
        if (map.has(x)) {
            if (map.get(x) !== y) {
                return false;
            }
        } else {
            if (set.has(y)) {
                return false;
            }
            map.set(x, y);
            set.add(y);
        }
    }

    return true;
};

console.log(isIsomorphic("add", "egg"));
