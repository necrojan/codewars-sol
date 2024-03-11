/**
 * Since everybody hates chaos and loves sorted lists we should implement some more sorting algorithms. 
 * Your task is to implement a Bubble sort (for some help look at https://en.wikipedia.org/wiki/Bubble_sort) 
 * and return a list of snapshots after each change of the initial list.
 * e.g.
 * If the initial list would be l=[1,2,4,3] my algorithm rotates l[2] and l[3] and 
 * after that it adds [1,2,3,4] to the result, which is a list of snapshots.
 */

bsort = arr => {
    let swapped = true;
    let temp;
    let copy;
    let prev = [];

    while (swapped) {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                copy = [...arr];
                prev.push(copy);
                swapped = true;
            }
        }
    }
    
    return prev;
};

console.log(bsort([2,1,4,3]))