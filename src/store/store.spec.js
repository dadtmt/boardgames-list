import { expect } from 'chai'
import { createStore } from 'redux'
import initialState from '../reducers/initialState'
import rootReducer from '../reducers'
import * as ItemActions from '../actions/itemActions'
import * as ItemCategory from '../constants/itemCategory'

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
    store.dispatch(ItemActions.deleteItem(ItemCategory.BOARDGAME, 1))
    store.dispatch(ItemActions.addItemByName(
      ItemCategory.BOARDGAME,
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

  it('should set initialState for players', () => {
    const store = createStore(rootReducer, initialState)
    const expected = {
      items: [
        {
          id: 1,
          name: 'Tom'
        },
        {
          id: 2,
          name: 'Sim'
        },
        {
          id: 3,
          name: 'Quen'
        }
      ],
      nextId: 4
    }
    expect(store.getState().players).to.deep.equal(expected)
  })

  it('should handle actions for players', () => {
    const store = createStore(rootReducer, initialState)
    store.dispatch(ItemActions.deleteItem(ItemCategory.PLAYER, 1))
    store.dispatch(ItemActions.addItemByName(
      ItemCategory.PLAYER,
      {name: 'Jojo'}
    ))
    const expected = {
      items: [
        {
          id: 2,
          name: 'Sim'
        },
        {
          id: 3,
          name: 'Quen'
        },
        {
          id: 4,
          name: 'Jojo'
        }
      ],
      nextId: 5
    }
    expect(store.getState().players).to.deep.equal(expected)
  })

  it('should set initialState for games', () => {
    const store = createStore(rootReducer, initialState)
    const expected = {
      nextId: 3,
      items: [
        {
          id: 1,
          boardGame: 1,
          players: [
            {
              player:2,
              score: 5,
              win: false
            },
            {
              player:1,
              score: 25,
              win: true
            },
            {
              player:3,
              score: 5,
              win: false
            }
          ]
        },
        {
          id: 2,
          boardGame: 2,
          players: [
            {
              player:3,
              score: 5,
              win: true
            },
            {
              player:1,
              score: 0,
              win: false
            },
            {
              player:2,
              score: 0,
              win: true
            }
          ]
        }
      ]
    }
    expect(store.getState().games).to.deep.equal(expected)
  })

  it('should handle actions for games', () => {
    const store = createStore(rootReducer, initialState)
    store.dispatch(ItemActions.deleteItem(ItemCategory.GAME, 1))
    const expected = {
      nextId: 3,
      items: [
        {
          id: 2,
          boardGame: 2,
          players: [
            {
              player:3,
              score: 5,
              win: true
            },
            {
              player:1,
              score: 0,
              win: false
            },
            {
              player:2,
              score: 0,
              win: true
            }
          ]
        }
      ]
    }
    expect(store.getState().games).to.deep.equal(expected)
  })
})
