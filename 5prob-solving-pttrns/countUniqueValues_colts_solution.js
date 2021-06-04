function countUniqueValues(arr) {
  // this is from mine
  if (arr.length === 0) {
    return 0
  }

  let i = 0

  // j starts at 1, otherwise will pass the end of the array and get an undefined value 
  // this doesn't break the program, but it's not good practice to have an undefined value in the array
  for (let j = 1; j < arr.length; j ++) {
    // if arr[j] === arr[i]
    // set value at arr[i] to value at arr[j]
    // increment i
    if (arr[j] !== arr[i]) {
      i += 1
      arr[i] = arr[j]      
    }
  }

  return i + 1
}

countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])