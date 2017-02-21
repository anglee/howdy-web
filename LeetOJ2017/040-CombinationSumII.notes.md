## Recursive

For example, the candidates are `[1,1,1,2,5,6]`, target = 7

`CombinationSum([1,1,1,2,5,6], 7)`

the combinations can be divided into 2 groups:

* combinations that do not use 1: `combinationSum([2,5,6], 7)`
* combinations that use at least one 1: `combinationSum([1,1,2,5,6], 6)` and for each result append `[1]`

base case:

```
combinationSum([], 0) = [[]]
combinationSum([], T) = []
```


## DP

For example, the candidates are `[1,1,1,2,5,6]`, target = 7

`combinationSum([1,1,1,2,5,6], 7)`

Use 2D array, X dimension ranges `[0, 7]`,

Y dimension:
* y == 0 (ie. c == 1), which means can use `[1]` 
* y == 1 (ie. c == 1), which means can use `[1,1]`
* y == 2 (ie. c == 1), which means can use `[1,1,1]`
* y == 3 (ie. c == 2), which means can use `[1,1,1,2]`
* y == 4 (ie. c == 5), which means can use `[1,1,1,2,5]`
* y == 5 (ie. c == 6), which means can use `[1,1,1,2,5,6]`

fill from top to bottom row by row, and for each row, from left to right, with
 
```
CS[x, y] = CS[x, y - 1] + CS[x - k, y - 1]
```

and base case:

```
CS[0, 0] = [[]]
CS[0, *] = [[]]
CS[*, 0] = []
```
