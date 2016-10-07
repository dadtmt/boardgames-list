import { expect } from 'chai'
import reducer from './boardGamesReducer'
import initialState from './initialState'
import {addBoardGame, removeBoardGame} from '../actions/boardGamesActions'

describe('Reducers::boardGames', ()=> {

  const getInitialState = () => {
    return initialState.boardGames
  }

  it('should set initialState by default', () => {
    const action = { type: 'unknown' }
    const expected = getInitialState()

    expect(reducer(undefined, action)).eql(expected)
  })

  it('should handle ADD_BOARDGAME action', () => {
    const fakeState = {
      1: {
        name: 'Dungeon Twister',
        id: 1
      },
      2: {
        name: 'Earth Reborn',
        id: 2
      },
      nextId: 3
    }
    const expected = {
      1: {
        name: 'Dungeon Twister',
        id: 1
      },
      2: {
        name: 'Earth Reborn',
        id: 2
      },
      3: {
        name: 'Blood Bowl',
        id: 3
      },
      nextId: 4
    }
    expect(reducer(fakeState, addBoardGame('Blood Bowl'))).to.be.eql(expected)
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
