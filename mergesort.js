function mergeSort(arr) {
    // If we only have one item, we can assume it is sorted
    if (arr.length < 2) return arr;
   
    // If it isn't just one element, split it into two
    // recursively until we just get one single item left
    let leftHalf = mergeSort(arr.slice((arr.length / 2).toFixed()));
    let rightHalf = mergeSort(arr.slice(0, (arr.length / 2).toFixed()));
   
    // Merge
    return merge(leftHalf, rightHalf);
  }
   
  function merge(leftarr, rightarr) {
    // Use this to store the sorted numbers
    let sortedArray = [];
   
    while (leftarr.length > 0 || rightarr.length > 0) {
      // If one of the arrays has ran out numbers
      // then it means the remaining one (which is already sorted)
      // can be tacked to the end of the sorted one
      if (leftarr[0] === undefined || rightarr[0] === undefined) {
        const remainingArray = leftarr[0] === undefined ? rightarr : leftarr;
        return sortedArray.concat(remainingArray);
      }
   
      let isSorted = rightarr[0] > leftarr[0]; // check to see whichever number is greater
      isSorted ? sortedArray.push(leftarr[0]) : sortedArray.push(rightarr[0]); // push the smallest number on the sorted array
      isSorted ? leftarr.shift() : rightarr.shift(); // remove that element from the array it was taken from
    }
   
    return sortedArray;
  }
   
  console.log(
    mergeSort([
      68, 35, 73, 82, 86, 44, 77, 38, 55, 99, 70, 96, 28, 45, 0, 31, 61, 10, 24,
      63, 45, 15, 4, 29, 92, 75, 2, 24, 39, 49, 72, 19, 2, 49, 64, 22, 67, 2, 27,
      34, 4, 78, 25, 15, 86, 89, 98, 74, 29, 42, 12, 20, 26, 21, 60, 83, 82, 64,
      23, 14, 90, 54, 76, 19, 1, 9, 50, 86, 58, 30, 73, 29, 13, 9, 53, 70, 40, 39,
      91, 59, 43, 13, 90, 31, 85, 80, 97, 68, 4, 86, 8, 58, 56, 78, 7, 83, 6, 91,
      4, 38,
    ])
  );
  console.log(
    mergeSort([
      32, 12, 44, 93, 32, 99, 38, 34, 19, 36, 9, 32, 65, 75, 56, 31, 3, 57, 36,
      57, 89, 95, 54, 0, 75, 31, 61, 56, 4, 32, 90, 64, 66, 28, 58, 40, 99, 44,
      95, 77, 20, 39, 37, 82, 59, 10, 85, 15, 88, 69, 63, 19, 31, 15, 96, 31, 45,
      57, 79, 36, 4, 38, 94, 56, 86, 42, 95, 14, 67, 64, 18, 85, 48, 54, 15, 27,
      36, 53, 72, 7, 53, 98, 41, 43, 50, 83, 5, 63, 88, 71, 83, 30, 75, 59, 3, 14,
      89, 12, 68, 44,
    ])
  );
  console.log(
    mergeSort([
      33, 71, 1, 58, 49, 96, 54, 63, 32, 65, 56, 21, 66, 17, 82, 6, 44, 5, 21, 22,
      55, 83, 28, 81, 18, 86, 73, 96, 85, 95, 20, 45, 30, 62, 46, 87, 89, 92, 78,
      78, 88, 25, 66, 7, 23, 27, 18, 39, 2, 10, 70, 53, 3, 54, 37, 46, 44, 53, 36,
      22, 29, 39, 71, 93, 74, 29, 67, 83, 3, 16, 36, 44, 10, 76, 70, 57, 38, 14,
      56, 20, 53, 38, 75, 66, 59, 45, 60, 9, 55, 52, 6, 30, 52, 29, 55, 52, 93,
      61, 57, 62,
    ])
  );
   
