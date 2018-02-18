function isPrime(t) {
    for (let i = 1; t > i; i++) {
        if (t % i === 0) {
            return false;
        }
    }
    return true;
}