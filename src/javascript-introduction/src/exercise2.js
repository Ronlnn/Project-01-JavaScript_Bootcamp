//Функция принимает 2 аргумента: 1) массив чисел и 2)сумма
//Функция возвращает массив двух индексов, которые составляют переданную сумму

function getNumbersIdBySum(arrayOfNumbers, sum) {
  const result = [];
  arrayOfNumbers.forEach((num, i) => {
    for (let j = i + 1; j < arrayOfNumbers.length; j++) {
      if (num + arrayOfNumbers[j] === sum) {
        result.push([i, j]);
      }
    }
  });
  return result;
}

console.log(getNumbersIdBySum([1, 2, 3, 4, 5], 6));
console.log(getNumbersIdBySum([1, 0, 5], 2));
console.log(getNumbersIdBySum([1, 0], 1));
console.log(getNumbersIdBySum([1, 2, 3, 4, 5], 0));
