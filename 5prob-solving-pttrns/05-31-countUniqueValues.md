Implement function called **countUniqueValues**
- accepts sorted array
- counts unique values in the array
- (can be negative numbers in array, but will aways be sorted)

advice
- start a pointer at first and second elements
- can use array itself to store values
- store unique variables at beginning of the array

suggested implementation
- pointer at first element
- pointer at second element
- compare ptr2 with ptr1
- if different, move ptr2 right
- if the same, set value at ptr1 to value at ptr2, move ptr2 right, move ptr1 right
- when ptr2 reaches end of array, take ~~value~~ at ptr1 as number of unique values
  - take INDEX (+1) at ptr1 as number of unique values