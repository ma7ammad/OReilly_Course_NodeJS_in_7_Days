const {concat} = require("../concat");

test("adds arr1 to arr2 correctly and returns concatenated array", () => {
  // Arrange
  const arr1 = [1, 2];
  const arr2 = [4, 5];
  const expected = [1, 2, 4, 5];

  //Act
  const actual = concat(arr1, arr2);

  //Assert
  expect(actual).toEqual(expected);
})