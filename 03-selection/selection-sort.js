function selectionSort(arr) {
  let copy = [...arr];
  let sorted = [];
  
  while (copy.length) {
    console.log(sorted.join(","));
    
    let min = Math.min(...copy);
    copy.splice(copy.indexOf(min), 1);
    sorted.push(min);
  }

  return sorted;
}


function selectionSortInPlace(arr) {
  let div = 0;
  
  while (div < arr.length) {
    console.log(arr.join(","));

    let min = Math.min(...arr.slice(div));
    let idx = arr.indexOf(min, div);

    for (let i = idx; i > div; i--) {
      arr[i] = arr[i - 1];
    }
    arr[div] = min;

    div++
  }

  return arr;
}


module.exports = [selectionSort, selectionSortInPlace];
