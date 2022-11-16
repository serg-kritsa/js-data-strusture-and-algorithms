

// Big O of Quick Sort
// TIME COMPLEXITY   - O(n log n) BEST / AVERAGE
// TIME COMPLEXITY   - O(n^2) WORST
// SPACE COMPLEXITY  - O(log n)
//    O(log n) decompositions 
//    O(n) comparisons per decompositions 
// Merge function from earlier
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}


function quickSort(arr, left = 0, right = arr.length -1){
  if(left < right){ // exit recursion condition means 1-element array
    let pivotIndex = pivot(arr, left, right) //3
    //left
    quickSort(arr,left,pivotIndex-1);
    //right
    quickSort(arr,pivotIndex+1,right);
  }
  return arr;
} 
           
quickSort([100,-3,2,4,6,9,1,2,5,3,23])