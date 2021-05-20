- uses objects of sets to collect values/frequencies of values
- this can often avoid the need for nested loops of O(N^2) operations with arrays/strings

## Example

- write function falled **same** 
  - accepts 2 arrays
  - function should return true if every value in array has it's correspoding value squared in the second array
- the frequency of values must be the same
```javascript
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9])   // false (every value does not have corresponding value squared)
same([1,2,1], [4,4,1]) // false (must be same frequency)
```

### Refactored (notes)

- this implementation loops over each array individually, instead of looping within a subloop
- 2 separate loops always more efficient than nested loop
- efficiency comes from constructing two objects with one loop each
  - objects hold each element of the array as a key and each element's frequency as a value