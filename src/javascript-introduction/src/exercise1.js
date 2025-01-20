//Функция генерирует диапазон натуральных целых чисел
function range(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}
console.log('Exercise 01');
console.log(range(0,5));
console.log(range(3,3));
console.log(range(8,0));
console.log(range(0,0));