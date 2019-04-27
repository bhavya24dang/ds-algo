/**
  Question 1: Given an array 'A' of sorted integers and another non negative integer k, find if
  there exists 2 indices i and j such that A[i] - A[j] = k, i != j.
  Example:
  Input :
  A : [1 3 5]
  k : 4
  Output : YES
  as 5 - 1 = 4
  Return 0 / 1 ( 0 for false, 1 for true ) for this problem
  Try doing this in less than linear space complexity.
 */
var isDiff = function(arr, k) {
	var i = 0, j = 0;
	while(i < arr.length) {
    if( (arr[i] - arr[j]) > k) {
      j++;
    } else if ((arr[i] - arr[j]) < k) {
      i++;
    } else {
      return 1;
    }
  }
  return 0;
}