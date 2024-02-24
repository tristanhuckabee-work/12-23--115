// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2)
  let left =  arr.slice(0, mid);
  let right = arr.slice(mid);

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  let res = [];

  let idxA = 0;
  let idxB = 0;

  while (idxA < arrA.length || idxB < arrB.length) {    
    if (arrA[idxA] < arrB[idxB] || !arrB[idxB]) {
      res.push(arrA[idxA]);
      idxA++;
    } else {
      res.push(arrB[idxB]);
      idxB++;
    }
  }

  return res;
}

module.exports = [merge, mergeSort];

