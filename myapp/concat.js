function concat(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new error("input is not an array, please make sure to input an array");
  } else {
    let newArr = arr1.concat(arr2);
    return newArr;

  }

}

module.exports = { concat };