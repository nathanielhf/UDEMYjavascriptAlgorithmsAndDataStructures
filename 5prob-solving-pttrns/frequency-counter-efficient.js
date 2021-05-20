function same(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let val of arr1){
    // assign val to key in frequencyCounter1
    // add one to the existing value of the corresponding key (or zero if key has no corresponding value)
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for(let key in frequencyCounter1){
    // check if the square of the value in freqCtr1 is not present in freqCtr2
    if(!(key ** 2 in frequencyCounter2)){
      return false
    }
    // check that the frequency of the squared element is the same as the original array
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false
    }
  }
  return true
}