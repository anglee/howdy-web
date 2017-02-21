## Recursive

the candidates are `[1,2,3,4,5,6,7,8,9]`

For example, k = 3, target = 7

`combinationSum(3, [1,2,3,4,5,6,7,8,9], 7)`

the combinations can be divided into 2 groups:

* combinations that do not use 1: `combinationSum(3, [2,3,4,5,6,7,8,9], 7)`
* combinations that use at least one 1: `combinationSum(2, [2,3,4,5,6,7,8,9], 7)` and for each result append `[1]`

base case:

```
combinationSum(0, [], 0) = [[]]
combinationSum(*, [], T) = [], where T !== 0
```

## DP

the candidates are `[1,2,3,4,5,6,7,8,9]`

For example, k = 3, target = 7

Use 2D array, X dimension ranges `[0, 7]`,

Y dimension:
* y == 0 (ie. k == 1), which means can use single element from candidates 
* y == 1 (ie. k == 2), which means can use 2 elements from candidates
* y == 2 (ie. k == 3), which means can use 3 elements from candidates

Fill the array from top to bottom, row by row. And for each row, fill from left to right for each of 1~9,
that is, each row is scanned from left to right 9 times

```
for (let i = 1; i <=9; ++i) {
for x = 1 to 7 {
  C[x, y] += C[x - i, y - 1]
}   
}
```

For example,

```
 C[7, 3] (ie. sum to 7, using 3 numbers) ==
   C[7 - 1, 2], 1 (ie. find results for (sum to 6, using 2 numbers), and then append 1 to each)
 + C[7 - 2, 2], 2 (ie. find results for (sum to 5, using 2 numbers), and then append 2 to each)
 + C[7 - 3, 2], 3 (ie. find results for (sum to 4, using 2 numbers), and then append 3 to each)
 + C[7 - 4, 2], 4 (ie. find results for (sum to 3, using 2 numbers), and then append 4 to each)
 + C[7 - 5, 2], 5 (ie. find results for (sum to 2, using 2 numbers), and then append 5 to each)
 + C[7 - 6, 2], 6 (ie. find results for (sum to 1, using 2 numbers), and then append 6 to each)
 
 but this way there will be duplicates, for example we count both [1,6] and [6,1],
 but they are supposed to be count only once
 
 The way I handled it is, when appending, check and only append a number
 when it is greater than the last of previous results.
 
 so for example when calculating C[7, 2],
 [1,6] is ok
 because when appending 6 to [1], 6 > 1
 the number to append, 6, is greater than the last element already in the result, 1
 but [6,1] is not ok, when appending 1 to [6],
 because when appending 1 to [6], 1 < 6
 the number to append, 1, is less than the last element already in the result, 6
``` 

base case:

```
C(0, *) = [[]]
```