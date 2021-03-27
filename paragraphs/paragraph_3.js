//сортування вставкою
function insertionSort (arr) {
    for (let i = 1; i < arr.length; i++) {
        currentElement = arr[i];
        j = i;
        while (j > 0 && arr[j - 1] > currentElement) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = currentElement;
    }
    return arr;
};
arr=[8,5,4,2,1,1,7,3]
arr=insertionSort(arr)
console.log(arr);
