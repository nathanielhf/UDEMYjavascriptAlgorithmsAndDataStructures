// Time Complexity - N^2

function same(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false
  }
  
  for(let i = 0; i < arr1.length; i++){
    // search arr2 for the square of each element of arr1
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    // if correctIndex does not exist, return false
    if(correctIndex === -1){
      return false;
    }
    arr2.splice(correctIndex,1)
  }
  return true;
}