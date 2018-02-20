function getTransformedArray(arr, func) {
  let transformedArray = [];
  let i = 0;

  forEach(arr, function(num) {
    transformedArray[i] = func(num);
    i++;
  });

  return transformedArray;
}