- Given two strings, write a function to determine if the second string is an anagram of the first

```javascript
validAnagram('','')   // true
validAnagram('aaz', 'zza')  // false
validAnagram('anagram', 'nagaram')  // true
validAnagram('rat', 'car')  // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt')  // true
validAnagram('texttwisttime', 'timetwittext') // true
```

### Exercise

- goal is to use frequency counter pattern
- can use two (or just one) object to count frequency
- assume all inputs single words
  - if interview should ask about edge cases (spaces, numbers, punctuation, different case, etc.)