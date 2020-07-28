export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  const rangeArray = [];
  if (start > end) {
    for (let index = start; index > end; index -= 1) {
      rangeArray.push(index);
    }
  }
  for (let index = start; index < end; index += 1) {
    rangeArray.push(index);
  }
  return rangeArray;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  return numbers.reduce((acc, val) => acc + val, 0);
}
