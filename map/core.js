function multiplyBy10(array) {
  return array.map((num) => num * 10);
}

function shiftRight(array) {
  return array.map((elem, index, arr) => {
    return index === 0 ? arr[arr.length - 1] : arr[index - 1];
  });
}

function onlyVowels(array) {
  return array.map((word) =>
    word
      .split("")
      .filter((letter) => /[aeiou]/.test(letter))
      .join("")
  );
}

function doubleMatrix(array) {
  return array.map((row) => row.map((num) => num * 2));
}

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix,
};
