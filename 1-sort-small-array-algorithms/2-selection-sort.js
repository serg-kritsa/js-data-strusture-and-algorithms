// i, j, ^ = found-min
// [5, 3, 4, 1, 2]
//  i  j
// [5, 3, 4, 1, 2]
//  i  ^  j
// [5, 3, 4, 1, 2]
//  i  ^     j
// [5, 3, 4, 1, 2]
//  i        ^  j
// [1, 3, 4, 5, 2]
//  ^              swapped 

// Big O of Selection Sort
// TIME COMPLEXITY   - O(N)   BEST
// TIME COMPLEXITY   - O(N^2) AVERAGE / WORST
// SPACE COMPLEXITY  - O(1)

// LEGACY VERSION (non ES2015 syntax)
function selectionSortV0(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            // SWAP!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

// ES2015 VERSION
function selectionSortV1(arr) {
    const swap = (arr, idx1, idx2) =>
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        if (i !== lowest) swap(arr, i, lowest);
    }

    return arr;
}

// selectionSortV0([0,2,34,22,10,19,17]);
selectionSortV1([0,2,34,22,10,19,17]);
