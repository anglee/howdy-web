First process the input to generate the count map, if there are more than 2 numbers that have odd count,
it is not possible to form palindrome. The number that has odd count is the odd guy.
 
Once we have the count map and identify the odd guy, the odd guy, if exists, must be place in the center.

And for all other numbers, take only 1 out of each pair and get permutations as described [here](https://github.com/anglee/howdy-web/blob/solved/LeetOJ2017/047-PermutationsII.notes.md).
and for each permutation result, place it to the left and place its reverse to the right of the center position.

One tricky thing to notice is that the odd guy can have count that is > 1, that is, it could be 3 or any positive odd number.
We take only one of such number, we still need to permutate the rest n - 1 numbers. For example,
if there are 5 `'x'`'s in the input, we place one 'x' at center, we still need to use the rest 4 `'x'`'s into the permutations.
