export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array == null) {
    throw new Error('Flatten undefined or null array');
  }
  const arrayStack = [...array];
  const res = [];
  while (arrayStack.length) {
    const temp = arrayStack.pop();
    if (temp instanceof Array) {
      while (temp.length) {
        res.push(temp.pop());
      }
    } else {
      res.push(temp);
    }
  }
  return res.reverse();
}
