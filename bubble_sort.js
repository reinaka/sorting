/*
СОРТИРОВКА ПУЗЫРЬКОМ

Временная сложность: O(n^2)
Затраты памяти: O(1)
Устойчивость: сортировка устойчивая

*/

function bubbleSort (arr) {
    let steps = arr.length - 1;
    let swap;
    
    do {
        swap = false;
        for (let i = 0; i < steps; i++) {
            if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            swap = true;
            }
        }
        steps--;
    } while (swap);
    return arr;
}

let arr = [5, 2, 2, 4, 6, 1, 3];
bubbleSort(arr); 