<h1>Big O Notation</h1>

<br>
<h2>Intro to Big O</h2>

* there is a need for quantitative way to communicate performance of code

<h3>Benefits of Big O Notation</h3>

* precise language for talking about how code performs
* useful for discussing trade-offs between different approaches
* when code slows down or crashes, indentifying parts of code that are inefficient can help find pain points in applications
* comes up in interviews

<br>
<h2>Timing Our Code</h2>

* yeehaw

<br>
<h2>Counting Operations</h2>

* seconds are variable, so measuring performance with (milli)seconds isn't reliable
* instead, is helpful to count _number_ of simple operations the computer has to perform (remains constant regardless of individual machine)

<h3>Example 1</h3>

The function
```javascript
function addUpTo(n) {
  return n * (n + 1) / 2;
}
```
has tbree operations: 
* 1 multiplication
* 1 addition
* 1 division

Doesn't matter what `n` is; could be 2 or 2 million, computer will only ever perform the above tbree simple operations

<h3>Example 2</h3>

```javascript
function addUpTo(n) {
  let total = 0 
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

*does* have a plus sign (line 4), like Example 1, but the plus sign is **in a loop**, and there is also an assignment operator. Therefore, this function has:

* n additions (addition in `total += 1`)
* n assignments (assignment in `total += 1`)
* n additions again (`i++`)
* n comparisons (`i <= n`)
* one assignment (`i = 1`)
* one more assignment (`let total = 0`)

Depending on what is counted, number of operations can be as low as 2*n* or as high as 5*n*+2

But regardless of the exact number, the number of operations grows roughly *proportionally with n*

<br>
<h2>7. Visualizing Time Complexity</h2>

* *[ demo of Performance tracker app. addUpToFirst was in constant time, addUpToSecond was in linear time 0(n) ]*

<br>
<h2>8. Official Intro to Big O</h2>

* Big O Notation is a way to formalize fuzzy counting
* Gives language to talk formally about how runtime of algorithm grows as inputs grow 
* details don't matter, just the **broad trends**

<h3>Big O Definition</h3>

We say that an alforith is **O(f(n))** if the number of simple operations the computer has to do is eventually less than a constant times **f(n)**, as **n** increases

* f(n) could be liner (f(n) = n)
* f(n) could be quadratice (f(n) = n<sup>2</sup>)
  * only care about the order of magnitude (doesn't matter if 5n or 10n)
* f(n) could be constant (f(n) = 1)
* f(n) could be something entirely different!

<h3>(Examples)</h3>

O(n) operation inside on O(n) operation = O(n<sup>2</sup>)

<h3>Big O Shorthands</h3>

1. Arithmetic operations are constant
2. variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

<br>

<h2>10. Space Complexity</h3>

* So far focused on **time complexity**: how to analyze the *runtime* of algorithm as size of inputs increases
* Now analyze **space complexity**: how much memory need to allcoate to run the code in algorithm

<h3>What About the Inputs<h3>

* Sometimes hear tearm **auxilary space complexity** to refer to space required by algorithm, not including space taken up by inputs
* Unless otherwise noted, when talking about space complexity, technically talking about auxilary space complexity

<h3>Space Complexity in JS (Rules of Thumb)</h3>

* Most primitives are constant space (booleans, numbers, `undefined`, `null`)
* String require O(n) space (where *n* is the string length)
* Reference type s(arrays, object) generally O(n) where N is legnth (for arays) or number of keys (for objects)

<h3>An Example</h3>

* function called sum, takes array and sums all items in array
* what takes up space?
  * have one variable called `total`
  * let declaration in `for` loop
* size of array doesn't have impact of *space* that is taken up
* always have 2 variables
* => constant space: O(1)

<h2>11. Logarithms</h2>

* Common complexities: O(1), O(n), O(n^2)
* Some Big O expressions involve more complex mathematical expressions, e.g. logarithms

<h3>What is a Logarithm?</h3>

* the opposite of an exponent
  * just like division and multiplication are a pair, so logarithms and exponentiation are a pair

log<sub>2</sub>(8) = 3
* "log base of of eight equals three"
* calculating: two to what power equals eight?
  * 2 * 2 * 2 = 8
  * 2^3 = 8
  * so two log three equals 8 
* different "bases" (above uses base 2; called binary log)
* binary log is most common (log<sub>2</sub>)
  * also common to see base 10 (log<sub>10</sub>)
  * also log<sub>e</sub>, which is common
* can omit the 2
  * log === log<sub>2</sub>
  * if comparing graphs, the base doesn't matter
    * we only care about general trend
  * "log" is *not* a mathematical expression, but is common shorthand for log<sub>2</sub>

"The logarithm of a number roughly measure the number of times you can divide that number by 2 **before you get a value that's less than or equal to one**"

<h3>Logarithm Examples</h3>

8 / **2** = 4
4 / **2** = 2
2 / **2** = 1

* divided by two three times, so log(8) = 3

25 / 2 = 12.5
12.5 / 2 = 6.25
6.25 / 2 = 3.125 
3.125 / 2 = 1.5625
1.5625 / 2 = 0.78125

log(25) ~ 4.64

* actual calculations not important, but what matters is the graph

<h3>Logarithm Complexity</h3>

* Logarithmic time complexity is great! Comparable to constant time (is steep for lower values though)

Time complexities ranked by speed fastest to slowest

1. O(1)
2. O(log n)
3. O(n)
4. O(nlog n)
5. O(n<sup>2</sup>)

<h3>Why does this matter</h3>

* Some searching algorithms have log time complexity
* Efficient sorting algorithms invovle algorithms
* Recursion sometimes involves logarithmic space complexity

<h3>Recap</h3>

* to analyze the performance of an algorithm, we use Big O Notation
* Big O Notation can give us a high leve understanding of the time or space complexity of an algorithm
* Big O Notation doesn't care about precision, only about the general trends (linear? quadratic? constant?)
* The time of space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm