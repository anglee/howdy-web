Similar to [046-Permutations](https://github.com/anglee/howdy-web/blob/solved/LeetOJ2017/046-Permutations.notes.md), the difference is input can have **duplicates**. But can still divide the solutions into groups by the starting digit.

For example, input = `[1,1,3,4]` results can be divided into groups:

* the ones that start with 1, i.e. prepend 1 to each of `permute([1,3,4])`
* the ones that start with 3, i.e. prepend 3 to each of `permute([1,1,4])`
* the ones that start with 4, i.e. prepend 4 to each of `permute([1,1,3])`

base case is still the same:

```
// base case
permute([]) => [[]];
```


Implementation details:

Note, solution `permuteUnique0` get the results then prepend and concat and the base case returns the base case mentioned ☝️, while solution `permuteUnique`, each leaf case just push the result(prefix) to `ret`, and is slightly more elegant and readable.

By using a counts map, don't need add and remove numbers to or from a Set. Also by using a Set, we can just iterate through the content do not need to worry about duplicates.




