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




// Old Approach
if (array.length > 1) {
	const median = Math.round(array.length / 2);
	// log(median);
	
	// S1 < X and X > S2
	// quickSort(S1 < X) quickSort(X > S2)
	let x = array[median];
	let s1 = array.slice(0, median);
	let s2 = array.slice(median);
	
	// log(median, s1, s2);
	
	let updatedArray = [];
	let temp = "";
	for (var i = 0, j = array.length - 1; i < array.length; i++, j--) {
		const item = array[i];
		const itemJ = array[j];
		log(item, itemJ);
	
		// if (item <= itemJ) {
		// 	continue;
		// } else {
		// 	// temp = itemJ;
		// 	// itemJ = item;
		// 	// item = temp;
		// 	// temp = item;
		// 	array[i] = itemJ;
		// 	array[j] = item;
		// };
	
		if (array[i] > array[median]) {
			changeItems(array[i], array[median], array);
		};
	
		if (array[i] > array[j]) {
			changeItems(array[i], array[j], array);
		};
	
		if (array[median] > array[j]) {
			changeItems(array[median], array[j], array);
		};
	
		if (i >= j) {
			// quickSort(s1);
			// quickSort(s2);
		};
	};
	
	log("updated array:", array);
	};
