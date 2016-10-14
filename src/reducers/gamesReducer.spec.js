import { expect } from 'chai'
import reducer from './gamesReducer'
import initialState from './initialState'
import { removeGame } from '../actions/gamesActions'

describe('Reducers::games', ()=> {

  const fakeState = {
    items: [
      {
        id: 1,
        name: 'Earth Reborn'
      },
      {
        id: 2,
        name: 'Dungeon Twister'
      }
    ],
    nextId: 3
  }

  it('should set initialState by default', () => {
    const getInitialState = () => {
      return initialState.games
    }
    const action = { type: 'unknown' }
    const expected = getInitialState()
    expect(reducer(undefined, action)).eql(expected)
  })

  it('should handle REMOVE_GAME action delete an item if it is present checking by id', () => {
    const expected = {
      items: [
        {
          id: 2,
          name: 'Dungeon Twister'
        }
      ],
      nextId: 3
    }
    expect(reducer(fakeState, removeGame(1))).to.be.eql(expected)
    expect(reducer(fakeState, removeGame(10))).to.be.eql(fakeState)
  })
})
