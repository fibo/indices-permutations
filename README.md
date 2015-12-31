# indices-permutations

> is a recursive reducer to all permutations with repetitions of multi dimensional array indices

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Install

With [npm](https://www.npmjs.com/) do

```
npm install indices-permutations --save
```

## Usage

Use it as a callback for the [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).
It returns the **result** array of all indices permutated.

# Examples

All code in the examples below is intended to be contained into a [single file](https://github.com/fibo/indices-permutations/blob/master/test.js).

```
var indicesPermutations = require('indices-permutations')
```

### order 1

Reduce `[n]` to `[[0], [1], ..., [n-1]]`

```
[5].reduce(indicesPermutations, []) // [[0], [1], [2], [3], [4]]
```

### order 2

Reduce `[m, n]` to `[[0, 0], [0, 1], ... ,[m-1, n-1]]`

```
[3, 3].reduce(indicesPermutations, []) // [[0, 0], [0, 1], [0, 2],
                                       //  [1, 0], [1, 1], [1, 2],
                                       //  [2, 0], [2, 1], [2, 2]]
```

### order 3

Reduce `[a1, a2, a3]` to `[[0, 0, 0], ... ,[a1 - 1, a2 - 1, a3 - 1]]`

```
[2, 2, 3].reduce(indicesPermutations, []) // [[0, 0, 0], [0, 0, 1], [0, 0, 2],
                                          //  [0, 1, 0], [0, 1, 1], [0, 1, 2],
                                          //  [1, 0, 0], [1, 0, 1], [1, 0, 2],
                                          //  [1, 1, 0], [1, 1, 1], [1, 1, 2]]
```

## License

[MIT](http://g14n.info/mit-license/)
