/*
СОРТИРОВКА СЛИЯНИЕМ

Временная сложность: O(nlogn)
Глубина рекурсии: O(log2n)
Объём памяти, помимо места под хранение массива: O(n) дополнительной памяти
Устойчивость: сортировка устойчивая

*/

function mergeSort(array) {
    if (array.length == 1) { // базовый случай рекурсии
        return array;
    }

    // запускаем сортировку рекурсивно на левой половине
    const left = mergeSort(array.slice(0, Math.floor(array.length / 2)));

    // запускаем сортировку рекурсивно на правой половине
    const right = mergeSort(array.slice(Math.floor(array.length / 2)));

    // заводим массив для результата сортировки
    const result = new Array(array.length).fill(0);

    // сливаем результаты
    let l = 0, r = 0, k = 0;
    while (l < left.length && r < right.length) {
      // выбираем, из какого массива забрать минимальный элемент
        if (left[l] <= right[r]) {
        result[k] = left[l];
        l++;
    } else {
        result[k] = right[r];
        r++;
    }
        k++;
    }

    // Если один массив закончился раньше, чем второй, то
    // переносим оставшиеся элементы второго массива в результирующий
    while (l < left.length) {
      result[k] = left[l]; // перенеси оставшиеся элементы left в result
        l++;
        k++;
    }
    while (r < right.length) {
      result[k] = right[r]; // перенеси оставшиеся элементы right в result
        r++;
        k++;
    }

    return result;
} 

let arr = [5, 2, 2, 4, 6, 1, 3];
mergeSort(arr); 