import { expect } from 'chai'
import reducer from './boardGamesReducer'
import initialState from './initialState'
import {removeBoardGame} from '../actions/boardGamesActions'

describe('Reducers::boardGames', ()=> {

  const getInitialState = () => {
    return initialState.boardGames
  }

  it('should set initialState by default', () => {
    const action = { type: 'unknown' }
    const expected = getInitialState()

    expect(reducer(undefined, action)).eql(expected)
  })

  it('should handle REMOVE_BOARDGAME action', () => {
    const fakeState = {
      1: {
        name: 'Dungeon Twister'
      },
      2: {
        name: 'Earth Reborn'
      }
    }
    const expected = {
      2: {
        name: 'Earth Reborn'
      }
    }
    expect(reducer(fakeState, removeBoardGame(1))).to.be.eql(expected)
  })
})
