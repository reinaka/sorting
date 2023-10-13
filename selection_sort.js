/*
СОРТИРОВКА ВЫБОРОМ

Временная сложность: O(n^2)
Объём памяти, помимо места под хранение массива: O(1)
Устойчивость: сортировка устойчивая

*/

const selectionSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        let indexMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }
    return arr;
};

let arr = [5, 2, 2, 4, 6, 1, 3];
selectionSort(arr); 