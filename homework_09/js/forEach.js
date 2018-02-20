function forEach(arr, elReturn) {
    for (let i = 0; i < arr.length; i++) {
        elReturn(arr[i]);
    }
}