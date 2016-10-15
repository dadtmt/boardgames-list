import {expect} from 'chai'
import {
   mapStateToProps,
   mapDispatchToProps
 } from './AddPlayerContainer'
import { PLAYER } from '../constants/itemCategory'
import { addItemByName } from '../actions/itemActions'

describe('AddPlayerContainer mapStateToProps', () => {
  it('should return {}', () => {
    const fakeState = {}

    const expected = {}
    expect(mapStateToProps(fakeState)).to.eql(expected)
  })
})

describe('AddPlayerContainer mapDispatchToProps', () => {
  it('should return {onSubmit: function that dispatch addPlayer}', () => {
    const fakeDispatch = (someFunction) => someFunction
    const expected = addItemByName(PLAYER, {name: 'some boardgame'})
    expect(mapDispatchToProps(fakeDispatch)
    .onSubmit({name: 'some boardgame'})).to.eql(expected)
  })
})
