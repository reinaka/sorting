/*
СОРТИРОВКА ВСТАВКАМИ

Временная сложность: O(n^2)
Объём памяти, помимо места под хранение массива: O(1)
Устойчивость: сортировка устойчивая

*/

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let item_to_insert = arr[i];
        let j = i;
        while (j > 0 && item_to_insert < arr[j - 1]) {
        arr[j] = arr[j - 1];
        j--;
    }
        arr[j] = item_to_insert;
    }
    return arr;
}

let arr = [5, 2, 4, 6, 1, 3];
insertionSort(arr); 