For example, numbers = [1,2,3,4]
the first digit of the output results are
* the ones that start with 1, i.e. prepend 1 to each of `permute([2,3,4])`
* the ones that start with 2, i.e. prepend 2 to each of `permute([1,3,4])`
* the ones that start with 3, i.e. prepend 3 to each of `permute([1,2,4])`
* the ones that start with 4, i.e. prepend 4 to each of `permute([1,2,3])`

base case:
```
permute([]) => [[]];
```
hence
```
permute([2]) => [
                  [2, ...[]]
                ]
             => [[2]]
```
```
permute([2,4]) => [
                    [2, ...[4]],
                    [4, ...[2]]
                  ]
               => [[2,4], [4,2]]
```