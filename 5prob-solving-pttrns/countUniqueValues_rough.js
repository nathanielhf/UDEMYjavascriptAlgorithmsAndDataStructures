function countUniqueValues(arr){
  
  // pointer at first element
  // pointer at second element
  let firstPointer = arr[0]
  let secondPointer = arr[1]

  // compare ptr2 with ptr1
  // if different, move ptr2 right
  for (let i = 0; i < arr.length; i++){
      console.log(firstPointer)
      console.log(secondPointer)
    // if (secondPointer !== firstPointer){
    //   secondPointer = arr[indexOf(secondPointer) + 1]
    // }
    // if the same, set value at ptr1 to value at ptr2, 
    if (secondPointer === firstPointer){
      firstPointer = arr.indexOf(secondPointer)
      // move ptr2 right, move ptr1 right      
      firstPointer = arr[arr.indexOf(firstPointer) + 1]
    }
    secondPointer = arr[arr.indexOf(secondPointer) + 1]
    // when ptr2 reaches end of array, take value at ptr1 as number of unique values
  }
  console.log(firstPointer)
}

countUniqueValues([1,1,1,1,1,2])