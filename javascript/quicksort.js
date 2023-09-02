function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[0];
  let leftArray = [];
  let rightArray = [];

  for (let i = 1; i < array.length; i++) {
    const element = array[i];

    if (element < pivot) {
      leftArray.push(element);
    } else {
      rightArray.push(element);
    }
    
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];

}

const newArray = [5, 1, 7, 10, 13, 34, 19, 2, 3, 55, 17, 24, 23, 7];
console.log(quickSort(newArray));
