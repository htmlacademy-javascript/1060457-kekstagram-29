// Функция для проверки длины строки.

const checkLength = (word, length) => word.length <= length;

// console.log(checkLength('дерево', 4));


// Функция для проверки, является ли строка палиндромом.

const checkPalindrom = (word) => {
  const newWord = word.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < newWord.length / 2; i++) {
    if (newWord[i] !== newWord[newWord.length - i - 1]) {
      return false;
    }
  }
  return true;
};

// console.log(checkPalindrom('Сел в озере березов лес'));

