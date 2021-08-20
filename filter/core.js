function onlyEven(array) {
  return array.filter((num) => num % 2 == 0);
}

function onlyOneWord(array) {
  return array.filter((str) => !str.includes(" "));
}

function positiveRowsOnly(array) {
  return array.filter((row) => row.every((num) => num >= 0));
}

function countVowels(word) {
  return [...new Set(word.split(""))].reduce((acc, letter) => {
    if (/[aeiou]/.test(letter)) acc++;
    return acc;
  }, 0);
}
function allSameVowels(array) {
  //return countVowels("amalagam");
  return array.filter((word) => countVowels(word) <= 1);
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels,
};
