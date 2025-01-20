// Функция находит все целые простые натуральные числа по алгоритму Решето Эратосфена

function getSimpleNumbers(touple) {
    const [start, end] = touple;
    if (start < 2 || end < 2) return []; // Проверка корректности диапазона

    const isPrime = new Array(end + 1).fill(true); // Изначально считаем все числа простыми
    isPrime[0] = isPrime[1] = false; // 0 и 1 не являются простыми

    // Алгоритм Решето Эратосфена
    for (let i = 2; i * i <= end; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= end; j += i) {
                isPrime[j] = false; // Все кратные числа помечаем как составные
            }
        }
    }

    // Формируем массив простых чисел в заданном диапазоне
    const result = [];
    for (let i = Math.max(2, start); i <= end; i++) {
        if (isPrime[i]) {
            result.push(i);
        }
    }

    return result;
}

console.log('Exercise 04');
console.log('2,10 = ',getSimpleNumbers( [2,10]));
console.log('2,2 = ',getSimpleNumbers( [2,2]));
