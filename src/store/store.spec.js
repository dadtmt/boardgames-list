import { expect } from 'chai'
import { createStore } from 'redux'
import initialState from '../reducers/initialState'
import rootReducer from '../reducers'
import * as BoardGamesActions from '../actions/boardGamesActions'

describe('Store', () =>{

  it('should be initialState for boardGames', () => {
    const store = createStore(rootReducer, initialState)
    const expected = {
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
    expect(store.getState().boardGames).to.deep.equal(expected)
  })

  it('should handle actions for boardGames', () => {
    const store = createStore(rootReducer, initialState)
    store.dispatch(BoardGamesActions.removeBoardGame(1))
    store.dispatch(BoardGamesActions.addBoardGame(
      {name: 'RuneWars'}
    ))
    const expected = {
      items: [
        {
          id: 2,
          name: 'Dungeon Twister'
        },
        {
          id: 3,
          name: 'RuneWars'
        }
      ],
      nextId: 4
    }
    expect(store.getState().boardGames).to.deep.equal(expected)
  })
})
