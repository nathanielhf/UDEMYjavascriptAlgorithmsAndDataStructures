function countUniqueValues(arr){
  let firstPointer
  let secondPointer
  // set ptr1 at first element
  // set ptr2 at second element
  // compare ptr2 with ptr1
  // if different, move ptr2 right
  // if the same, set value at ptr1 to value at ptr2, move both pointers right
  for (let i = 0; i < arr.length; i++){
    firstPointer = arr[i]
    secondPointer = arr[i+1]    
    
    if (secondPointer === firstPointer){
      firstPointer = arr.indexOf(secondPointer)           
    }    
  }
  // when ptr2 reaches end of array, take value at ptr1 as number of unique values
  console.log(firstPointer)
}

countUniqueValues([1,1,1,1,1,2])