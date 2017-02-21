## recursive

`c(n, k) = c(n - 1, k - 1) + c(n - 1, k)`

select k out of range [1, n] and generate combinations can be divided into 2 cases. 
* with the number n: generate k - 1 out of range [1, n - 1] and append n to each of the result
* without the number n: generate k out of range [1, n - 1]

base case:
when k === 0, return [[]] (why?)

short circuit
if n === k, output is the same as the input


## DP

(see image notes)