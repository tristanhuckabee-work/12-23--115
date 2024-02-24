// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  let copy = [...arr];
  let sorted = [];
  while (copy.length) {
    console.log(sorted.join(','));

    let curr = copy.pop();
    sorted.push(null);

    let i = sorted.length - 1;
    for (i; i > 0; i--) {
      if (sorted[i - 1] < curr) break

      sorted[i] = sorted[i - 1];
    }
    sorted[i] = curr;
  }
  return sorted;
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  let div = 1;

  while (div < arr.length) {
    console.log(arr.join(','));

    let curr = arr[div];

    let i = div;
    for (i; i > 0; i--) {
      if (arr[i - 1] < curr) break

      arr[i] = arr[i - 1];
    }
    arr[i] = curr;
    div++;
  }
  return arr;
}

module.exports = [insertionSort, insertionSortInPlace];
