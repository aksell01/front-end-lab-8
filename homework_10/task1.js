function debounce(increaseIteratorBy1, delay) {
    let timeout;
    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(increaseIteratorBy1, delay);
    }
}


let iterator = 0;

function increaseIteratorBy1() {
    iterator++;

    printIteratorValue();
}

function printIteratorValue() {
    console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 5000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();