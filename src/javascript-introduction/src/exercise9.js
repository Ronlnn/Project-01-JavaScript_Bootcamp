//Бинарный поиск

function binarySearch(arrayOfNumbers, num) {
  let left = 0;
  let right = arrayOfNumbers.length - 1;

  while (left <= right) {
    let mid = Math.round(left + ((right - left) / 2)); // Можно и просто (left + right) / 2. +left  добавляется, чтобы избежать выход за пределы массива
	if(arrayOfNumbers[mid] < num){
		left = mid + 1;
	}else if(arrayOfNumbers[mid] > num){
		right = mid - 1;
	}else{
		return mid;
	}
  }
  return 'Error';
}

console.log('Exercise 9');
console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));
console.log(binarySearch([2, 4, 6, 8, 10], 8));
console.log(binarySearch([-10, -5, 0, 5, 10], 0));
