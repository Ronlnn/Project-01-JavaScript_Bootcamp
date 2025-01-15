// Функция находит наибольшее общее делимое двух неотрицательных целых натуральных чисел, используя алгоритм Евклида

function getNOD(first, second) {
  while (first != 0 && second != 0) {
    if (first > second) {
      first = first % second;
    } else {
      second = second % first;
    }
  }
  return first || second;
}

console.log('3,6 -', getNOD(3, 6));
console.log('0,2-', getNOD(0, 2));
console.log('5,5 -', getNOD(5, 5));
console.log('1,3 -', getNOD(1, 3));
console.log('0,0 -', getNOD(0, 0));
