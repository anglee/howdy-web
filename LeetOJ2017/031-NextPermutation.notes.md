Scan the input array from right to left, find the index of the first element that is decreasing

for example, for `[6, 3, 5, 4, 2, 1]` the scanning from the right, the first decreasing number is `3`.

after `i` is found,

if `i` is -1, this means the array is in ascending order and is the last in the permutation sequence, e.g. `[3,2,1]`, and solution should return the first of the sequence, which is the reverse, e.g. `[1,2,3]`

if `i` is not -1, we want first swap A[i] with the first (from right) number that is > A[i], and then reversed the right slice.

For example,
```
[6, 3, (5, 4, 2, 1)]
    i      j  ←  ← find j from right to left that A[j] > A[i]
// swap(A, i, j)
=> [6, 4, (5, 3, 2, 1)]
// reverse(A, 2)
=> [6, 4, (1, 2, 3, 5)]
```
