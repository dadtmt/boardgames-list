import { expect } from 'chai'
import reducer from './boardGamesReducer'
import initialState from './initialState'
import {addBoardGame, removeBoardGame} from '../actions/boardGamesActions'

describe('Reducers::boardGames', ()=> {

  it('should set initialState by default', () => {
    const getInitialState = () => {
      return initialState.boardGames
    }
    const action = { type: 'unknown' }
    const expected = getInitialState()
    expect(reducer(undefined, action)).eql(expected)
  })

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

  it('should handle ADD_BOARDGAME action: add a boardGame only if it is not present checking by name and name defined', () => {
    const expected = {
      items: [
        {
          id: 1,
          name: 'Earth Reborn'
        },
        {
          id: 2,
          name: 'Dungeon Twister'
        },
        {
          id: 3,
          name: 'Blood Bowl'
        }
      ],
      nextId: 4
    }
    expect(reducer(fakeState, addBoardGame('Blood Bowl'))).to.be.eql(expected)
    expect(reducer(fakeState, addBoardGame('Earth Reborn'))).to.be.eql(fakeState)
    expect(reducer(fakeState, addBoardGame())).to.be.eql(fakeState)
  })

  it('should handle REMOVE_BOARDGAME action delete an item if it is present chencking by id', () => {
    const expected = {
      items: [
        {
          id: 2,
          name: 'Dungeon Twister'
        }
      ],
      nextId: 3
    }
    expect(reducer(fakeState, removeBoardGame(1))).to.be.eql(expected)
    expect(reducer(fakeState, removeBoardGame(10))).to.be.eql(fakeState)
  })
})
