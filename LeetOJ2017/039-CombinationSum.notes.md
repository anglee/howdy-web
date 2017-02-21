## Recursive

For example, the candidates are `[1, 5, 10]`, target = 25
`combinationSum([1, 5, 10], 25)`

the combinations can be divided into 2 groups:

* combinations that do not use 10: `combinationSum([1,5], 25)`
* combinations that use 10: `combinationSum([1,5,10], 15)` and for each result append `[10]`

another way to think about it is to divide by the number of 10's used

* use zero 10, `combinationSum([1,5], 25)`
* use one 10, `combinationSum([1,5], 15)` and append each with `[10]`
* use two 10's, `combinationSum([1,5], 5)` and append each with `[10, 10]`
* use 3+ 10's is not possible


Base case:

```
combinationSum([], 0) => [[]]
combinationSum([], T) => []
```


## DP

For example, the candidates are `[1, 5, 10]`, target = 25
`combinationSum([1, 5, 10], 25)`

Use 2D array, X dimension ranges `[0, 25]`,

Y dimension:
* y == 0 (ie. k == 1), which means can use `[1]` 
* y == 1 (ie. k == 5), which means can use `[1,5]`
* y == 2 (ie. k == 10), which means can use `[1,5,10]`

fill from top to bottom row by row, and for each row, from left to right, with

```
CS[x, y] = CS[x, y - 1] + CS[x - k, y]
```

and base case:

```
CS[0, 0] = [[]]
CS[0, *] = [[]]
CS[*, 0] = []
```


