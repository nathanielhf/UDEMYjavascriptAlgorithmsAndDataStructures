function countUniqueValues(arr) {
  
  if (arr.length !== 0) {
    return 0
  }

  let i = 0

  for (let j = 1; j <= arr.length; j++) {
    // if arr[j] === arr[i]
    // set value at arr[i] to value at arr[j]
    // increment i
    if (arr[j] === arr[i]) {
      arr[i] = arr[j]
      i += 1
    }
  }

  return i
}