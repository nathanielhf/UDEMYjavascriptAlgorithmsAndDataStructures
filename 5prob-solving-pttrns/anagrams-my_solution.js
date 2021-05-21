function anagram(word1, word2){
  // instantiate two objects
  let letterFrequency1 = {}
  let letterFrequency2 = {}

  //  construct first object:
  //    loop through word1
  //    for each element in word1, increment the value
  for (let elem of word1){
    letterFrequency1[elem] = (letterFrequency1[elem] || 0) + 1
  }
  //  construct second object in the same way
  for (let elem of word2){
    letterFrequency2[elem] = (letterFrequency2[elem] || 0) + 1
  }

  //  compare objects
  //    compare values at each key in the two objects
  //      if key only exists in one object, return false
  //      if value is different, return false
  for (let key in letterFrequency1){
    if (!(key in letterFrequency2)){
      return false
    }
    if (letterFrequency2[key] !== letterFrequency1[key]){
      return false
    }
  }
  return true
}