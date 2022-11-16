// _ = sorted, ^ = current
// [5, 3, 4, 1, 2]
//  _  ^
// [3, 5, 4, 1, 2]
//  ____  ^
// [3, 4, 5, 1, 2]
//  _______  ^
// [1, 3, 4, 5, 2]
//  __________  ^
// [1, 2, 3, 4, 5]
//  _____________

// Big O of Insertion Sort
// TIME COMPLEXITY   - O(N^2) BEST / AVERAGE / WORST
// SPACE COMPLEXITY  - O(1)

function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])