function getClosestToZero() {
    let n = Math.abs(arguments[0]);
    for (let i = 1; i < arguments; i++) {
        if (Math.abs(n) > Math.abs(i)) {
            n = i;
        }
    }
    return n;
}