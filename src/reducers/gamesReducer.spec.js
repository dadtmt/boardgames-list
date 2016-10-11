import { expect } from 'chai'
import reducer from './gamesReducer'
import initialState from './initialState'

describe('Reducers::games', ()=> {

  it('should set initialState by default', () => {
    const getInitialState = () => {
      return initialState.games
    }
    const action = { type: 'unknown' }
    const expected = getInitialState()
    expect(reducer(undefined, action)).eql(expected)
  })
})
