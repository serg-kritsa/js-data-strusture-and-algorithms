//         [8, 3, 5, 4, 7, 6, 1, 2]
//     [8, 3, 5, 4]        [7, 6, 1, 2]
//   [8, 3]    [5, 4]    [7, 6]    [1, 2]
//  [8]  [3]  [5]  [4]  [7]  [6]  [1]  [2]
//   [3, 8]    [4, 5]    [6, 7]    [1, 2]
//     [3, 4, 5, 8]        [1, 2, 6, 7]
//         [1, 2, 3, 4, 5, 6, 7, 8]

// Big O of Merge Sort
// TIME COMPLEXITY   - O(n log n) BEST / AVERAGE / WORST
// SPACE COMPLEXITY  - O(n)
// O(log n) decompositions
// O(n) comparisons per decomposition
// Merge function from earlier
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

// Recrusive Merge Sort
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

let sortedList = mergeSort([10,24,76,73])
console.log(sortedList);

// // Floor & Slice Explanation
// let list = [1, 2, 3, 4, 5];
// let middleIdx = Math.floor(list.length/2); // 2
// let rangeNotIncludingItem = list.slice(0,middleIdx); // [1, 2] 
// let remainingIncludingItem = list.slice(middleIdx); // [3, 4, 5]
// console.log(middleIdx, rangeNotIncludingItem, remainingIncludingItem);