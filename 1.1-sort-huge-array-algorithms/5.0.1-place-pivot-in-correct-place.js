// [ 5,   2,   1,   8,   4,   7,   6,   3 ]
//  p/s   ip>
//  p     s++
//  p     swap 1 1
//  p     s   ip>    
//  p         s
//  p         swap 2 2 
//  p     s             ip>
//  p         s
//  p                   swap 3 4 
// [ 5,   2,   1,   4,   8,   7,   6,   3 ]
//  p          s                        ip>
//  p               s
//  p                                   swap 4 7 
// [ 5,   2,   1,   4,   3,   7,   6,   8 ]
//   swap 0 4 
// [ 3,   2,   1,   4,   5,   7,   6,   8 ]


function pivotV0(arr, start=0, end=arr.length+1){
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for(var i = start + 1; i < arr.length; i++){
    if(pivot > arr[i]){
      swapIdx++;
      swap(arr,swapIdx,i);
    }
  }
  swap(arr,start,swapIdx);
  return swapIdx;
}

// Version with ES2015 Syntax
function pivotV1(arr, start = 0, end = arr.length - 1) {
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
pivotV0([5,   2,   1,   8,   4,   7,   6,   3])
// pivotV0([4,8,2,1,5,7,6,3])
// pivotV1([4,8,2,1,5,7,6,3])


