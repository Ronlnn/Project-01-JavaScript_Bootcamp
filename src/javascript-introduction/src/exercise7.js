function sma(arrayOfNumbers, period) {
  if (period <= 0) throw new Error('Период должен быть больше 0');

  let result = [];

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    let currentPeriod = Math.min(i + 1, period);
    let sum = 0;
    for (let j = i; j > i - currentPeriod; j--) {
      sum += arrayOfNumbers[j];
    }

    result.push(sum / currentPeriod);
  }

  return result;
}

console.log('Exercise7');
console.log(sma([1, 2, 3], 3));
console.log(sma([1, 2, 3], 1));
console.log(sma([1, 2, 3], 2));
