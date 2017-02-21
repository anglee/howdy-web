This is more like [Permutations](https://github.com/anglee/howdy-web/blob/solved/LeetOJ2017/046-Permutations.notes.md) than Combinations, since the order matters, (ie. `[1,2], [2,1]` are counted twice)

## Recursive

for example: A = `[1,2,3]`; T = 4; combination([1,2,3], 4)
→ `[1,1,1,1], [1,1,2], [1,2,1], [2,1,1], [2,2], [3,1]`
The solutions can be divided into:
* start with 1: `[1,1,1,1], [1,1,2], [1,2,1]`, which ie prepending `[1]` to each of combinationSum([1,2,3], 4 - 1)
* start with 2: `[2,1,1], [2,2]`, which is prepending `[2]` to each of combinationSum([1,2,3], 4 - 2)
* start with 3: `[3,1]`, which is prepending `[3]` to each of combinationSum([1,2,3], 4 - 3)

base case:

```
combinationSum(0) = [[]]
combinationSum(T) = [], where T < 0
```

## DP

1D array, scan from left to right, one by one.

for each cell i, check all nums(distinct).

for example: A = `[1,2,3]`; T = 4; combination([1,2,3], 4)
→ `[1,1,1,1], [1,1,2], [1,2,1], [2,1,1], [2,2], [3,1]`

```
ret[4] =
  append 1 to each of ret[4 - 1] + 
  append 2 to each of ret[4 - 2] + 
  append 3 to each of ret[4 - 3]
```

base case:

```
ret[0] = [[]];
```