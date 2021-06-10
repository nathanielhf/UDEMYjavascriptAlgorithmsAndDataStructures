## Sliding Window Pattern

- involves creating a **window** which can either be an array or number from one position to another
- depending on a certain condition, the window either increases or closes (and a new window is created)
- useful for string or array, looking for subset of that data that is *continuous*

Small Example
- take a string `hellothere` and find longest sequence of characters that don't repeat (ie unique characters)

## Example

- write a function called maxSubarraySum which acepts an array on integers anda number called **n**
- Functino should calculate the maximum sum of **n** consectutive elements in the array

Several ways to solve
- Naive: start with first element, loop through remaining elements, store sum (of three lements at a time) in a variabble