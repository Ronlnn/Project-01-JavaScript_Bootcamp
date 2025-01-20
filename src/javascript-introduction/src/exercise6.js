//Функция Шифр Цезаря. Есть алфавит из словаря (буква - шифр).
// На вход подается строка из букв, и второй аргумент - количество итераций шифром.

function alphabetMap(rawString, mapCount) {
  const alphabet = {
    a: 'def',
    b: 'efc',
    c: 'abe',
    d: 'cba',
    e: 'fba',
    f: 'dcb',
  };

  let result = rawString;
  const Encryption = text => {
    let encrypted = '';
    for (let symbol of text) {
      encrypted += alphabet[symbol];
    }
    return encrypted;
  };
  for (let i = 0; i < mapCount; i++) {
    result = Encryption(result);
  }
  return result;
}

console.log('Exercise 6');
console.log(alphabetMap('abcdef', 1));
console.log(alphabetMap('aa', 2));
console.log(alphabetMap('bad', 1));
