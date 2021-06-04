function countUniqueValues(arr) {
  
  if (arr.length === 0) {
    return 0
  }

  let i = 0

  for (let j = 0; j < arr.length; j ++) {
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