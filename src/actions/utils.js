import R from 'ramda'

export const prefixTypeByPath = type => R.pipe(
  R.join('-'),
  R.flip(R.concat)('/'),
  R.flip(R.concat)(type)
)
