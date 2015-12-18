var indicesPermutations = require('./index')
var test = require('tape')

test('reduce [n] to [[0], [1], ..., [n-1]]', function (t) {
  t.plan(1)

  t.deepEqual([5].reduce(indicesPermutations, []), [[0], [1], [2], [3], [4]])
})

test('reduce [m, n] to [[0, 0], [0, 1], ... ,[m-1, n-1]]', function (t) {
  t.plan(1)

  t.deepEqual([3, 3].reduce(indicesPermutations, []), [[0, 0], [0, 1], [0, 2],
                                                       [1, 0], [1, 1], [1, 2],
                                                       [2, 0], [2, 1], [2, 2]])
})

test('reduce [a1, a2, ... an] to [[0, 0 ...], ... ,[a1 - 1, ..., an - 1]]', function (t) {
  t.plan(1)

  t.deepEqual([2, 2, 3].reduce(indicesPermutations, []), [[0, 0, 0], [0, 0, 1], [0, 0, 2],
                                                          [0, 1, 0], [0, 1, 1], [0, 1, 2],
                                                          [1, 0, 0], [1, 0, 1], [1, 0, 2],
                                                          [1, 1, 0], [1, 1, 1], [1, 1, 2]])
})
