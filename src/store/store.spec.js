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
      items: {
        1: {
          id: 1,
          name: 'Earth Reborn',
          [ItemCategory.GAME]: [1]
        },
        2: {
          id: 2,
          name: 'Dungeon Twister',
          [ItemCategory.GAME]: [2]
        }
      },
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
      items: {
        1: {
          id: 1,
          name: 'Earth Reborn',
          [ItemCategory.GAME]: [1]
        },
        2: {
          id: 2,
          name: 'Dungeon Twister',
          [ItemCategory.GAME]: [2]
        },
        3: {
          id: 3,
          name: 'RuneWars'
        }
      },
      linkError: {
        payload: {
          id: 1,
        },
        type: 'DELETE_BOARDGAME'
      },
      nextId: 4
    }
    expect(store.getState().boardGames).to.deep.equal(expected)
    store.dispatch(ItemActions.deleteItem(ItemCategory.BOARDGAME, 3))
    const expectedAfterDelete = {
      items: {
        1: {
          id: 1,
          name: 'Earth Reborn',
          [ItemCategory.GAME]: [1]
        },
        2: {
          id: 2,
          name: 'Dungeon Twister',
          [ItemCategory.GAME]: [2]
        }
      },
      nextId: 4
    }
    expect(store.getState().boardGames).to.deep.equal(expectedAfterDelete)
  })

  it('should set initialState for players', () => {
    const store = createStore(rootReducer, initialState)
    const expected = {
      items: {
        1: {
          id: 1,
          name: 'Tom',
          [ItemCategory.GAME]: [1, 2]
        },
        2: {
          id: 2,
          name: 'Sim',
          [ItemCategory.GAME]: [1, 2]
        },
        3: {
          id: 3,
          name: 'Quen',
          [ItemCategory.GAME]: [1, 2]
        }
      },
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
      items: {
        1: {
          id: 1,
          name: 'Tom',
          [ItemCategory.GAME]: [1, 2]
        },
        2: {
          id: 2,
          name: 'Sim',
          [ItemCategory.GAME]: [1, 2]
        },
        3: {
          id: 3,
          name: 'Quen',
          [ItemCategory.GAME]: [1, 2]
        },
        4: {
          id: 4,
          name: 'Jojo'
        }
      },
      linkError: {
        payload: {
          id: 1,
        },
        type: 'DELETE_PLAYER'
      },
      nextId: 5
    }
    expect(store.getState().players).to.deep.equal(expected)
    store.dispatch(ItemActions.deleteItem(ItemCategory.PLAYER, 4))
    const expectedAfterDelete = {
      items: {
        1: {
          id: 1,
          name: 'Tom',
          [ItemCategory.GAME]: [1, 2]
        },
        2: {
          id: 2,
          name: 'Sim',
          [ItemCategory.GAME]: [1, 2]
        },
        3: {
          id: 3,
          name: 'Quen',
          [ItemCategory.GAME]: [1, 2]
        }
      },
      nextId: 5
    }
    expect(store.getState().players).to.deep.equal(expectedAfterDelete)
  })

  it('should set initialState for games', () => {
    const store = createStore(rootReducer, initialState)
    const expected = {
      nextId: 3,
      items: {
        1: {
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
        2: {
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
      }
    }
    expect(store.getState().games).to.deep.equal(expected)
  })

  it('should handle actions for games', () => {
    const store = createStore(rootReducer, initialState)
    store.dispatch(ItemActions.deleteItem(ItemCategory.GAME, 1))
    const expected = {
      nextId: 3,
      items: {
        2: {
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
      }
    }
    expect(store.getState().games).to.deep.equal(expected)
  })
})
