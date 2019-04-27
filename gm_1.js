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