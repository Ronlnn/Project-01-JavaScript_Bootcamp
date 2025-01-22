// Функция поиска наибольшей последовательности нулей в строке.
//Эффективно решить с линейным проходом.

function getMaxZeroCount(raw) {
  let current = 0;
  let max = 0;
  for (let char of raw) {
    if (char === '0') {
      current++;
      max = Math.max(max, current);
    } else {
      current = 0;
    }
  }
  return max;
}

console.log('Exercise 10');
console.log(getMaxZeroCount('1010010001'));
console.log(getMaxZeroCount('100100100'));
console.log(getMaxZeroCount('11111'));
