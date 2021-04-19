<h2>The BIG O of Objects</h2>

* through the lens of big O and performance
* everything stored in *unordered, key-value pairs*

When to use Objects
* when order doesn't matter
* when want quick insertion and removal (is constant time with objects)
* because no order is no beginning or end, so doesn't matter where add - just add using a key

Big O of Objects
* insertion (01)
* removal (01)
* searching (0n)
* access (01)

Searching does not mean "looking for a key", means checking to see if given piece of information is in object somewhere 

<h2>Arrays</h2>

* intrisic ordering of data

When to use arrays
* when you need order
  * can also use linked lists, but are not built into JS
* when need fast insertion/removal (sometimes...)

Big O of Arrays
* insertion - depends...
* removal - depends...
* searching - O(N)
* access - O(1)

when have 10,000 element array and want 9,000th array, JS doesn't go through 9,000 elements. Each element has index that corresponds to it, and JS can go straight to that index

insertion

<h2>Big O of Arrays</h2>

(don't need to memorize this information)
(list of time complexity of several array operations)
* push - O(1)
* pop - O(1)
* shift - O(N)
* unshift - O(N)
* concat - O(N)
* slice - O(N)
* splice - O(N)
* sort - O(N * log N)
* forEach/map/filter/reduce/etc. - O(N)
