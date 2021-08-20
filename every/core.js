// Check to see if all elements in an array
// are even numbers.

function allEven(input) {
  return input.every((num) => num % 2 == 00);
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  return input.every((elem) => typeof elem === typeof input[0]);
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  return input.every(
    (elem) => Array.isArray(elem) && elem.every((num) => num > 0)
  );
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function countVowels(word) {
  return [...new Set(word.split(""))].reduce((acc, letter) => {
    if (/[aeiou]/.test(letter)) acc++;
    return acc;
  }, 0);
}

function allSameVowels(input) {
  return input.every((word) => countVowels(word) <= 1);
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels,
};
