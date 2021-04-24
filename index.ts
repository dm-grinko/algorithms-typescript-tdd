'use strict';

// O(log(n))
module.exports.binarySearch = (list: number[], item: number) => {
    let low = 0;
    let high = list.length - 1;
    do {
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];
        
        if (guess == item) {
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    } while (low <= high);
    return null;
};

// O(n^2)
module.exports.bubbleSort = (arr: number[]) => {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return arr;
};
