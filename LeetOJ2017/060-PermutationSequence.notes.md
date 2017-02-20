For input `[1,2,3,4]`, of all the results 

* the first 3! in the sequence starts with 1
* the next 3! in the sequence starts with 2
* the next 3! in the sequence starts with 3
* the last 3! in the sequence starts with 4


Now we when we want to find kth (1-based), we know it belongs to the group that starts with `ceil(k / 3!)`.

Say we want to find k = 14 (`doPermute([1,2,3,4], 14)`), we know it starts with ceil(14/(3!)), i.e. 3,
and it is the 2nd in that group (14 - 2 * (3!) === 2).

And recursively, we find the 2nd in the group starting with 3 by `doPermute([1,2,4], 2)`

Base case,

when k === 1, we want the 1st(i.e. smallest) that can be formed by the set of numbers, and assuming the 
numbers are sorted, we just return the numbers (or when returning as a string, join by `.join('')`)