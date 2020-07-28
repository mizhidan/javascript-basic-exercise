export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array == null) {
    throw new Error('Creating list from undefined array');
  } else if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }
  return createlist(array);

  function createlist(array) {
    return array.length > 1 ? { value: array[0], next: createlist(array.slice(1)) } : { value: array[0], next: null };
  }
  
}
