function sum(array) {
  return array.reduce((acc, val) => acc + val, 0);
}

function productAll(array) {
  return array.reduce(
    (acc, row) => acc * row.reduce((prod, elem) => prod * elem),
    1
  );
}

function objectify(array) {
  return array.reduce((kvpair, elem) => {
    kvpair[elem[0]] = elem[1];
    return kvpair;
  }, {});
}

function luckyNumbers(array) {
  return array.reduce((sent, num, i) => {
    return i === array.length - 1 ? sent + "and " + num : sent + num + ", ";
  }, "Your lucky numbers are: ");
}

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers,
};
