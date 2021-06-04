- Creating **pointers** or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.
- **Very** efficient for solving problems with minimal space complexity

## Example

- function called sumZero which accepts a sorted array of integers
- function should find first pair where sum is 0
- return array that includes both values that sum to zero or undefine if a pair does not exist
```javascript
sumZero([-3,-2,-1,0,1,2,3])   // [-3,3]
sumZero([-2,0,1,3])   // undefined
sumZero([1,2,3])    // undefined
```

### Naive solution

- using nested `for` loops
- looping through array
  - second loop that iterates through entire rest of array
- could benefit from pointers pattern
  - pointer at beginning and pointer at end
    - works because the lowest number and highest number will likely sum to zero