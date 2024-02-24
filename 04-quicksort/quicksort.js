function quicksort(arr) {
  if (arr.length <= 1) return arr;

  let copy = [...arr]
  let pivot = copy.splice(Math.floor(copy.length / 2), 1);
  let left = [];
  let right = [];

  for (let i = 0; i < copy.length; i++) {
    if (copy[i] <pivot) left.push(copy[i]);
    else right.push(copy[i]);
  }

  return [...quicksort(left), ...pivot, ...quicksort(right)]
}


module.exports = [quicksort];
