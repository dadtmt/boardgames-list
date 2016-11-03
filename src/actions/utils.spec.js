import { expect } from 'chai'
import { prefixTypeByPath } from './utils'

describe('prefixTypeByPath', () => {
  it('should return type with prefix a-path-to-something/', () => {
    expect(prefixTypeByPath('TYPE')(['a','path','to','something']))
    .to.equal('a-path-to-something/TYPE')
  })
})
