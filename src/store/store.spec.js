import R from 'ramda'
import { expect } from 'chai'
import { createStore } from 'redux'
import initialState from '../reducers/initialState'
import rootReducer from '../reducers'
import * as ItemActions from '../actions/itemActions'
import * as ItemCategory from '../constants/itemCategory'
import * as UiActions from '../actions/uiActions'

describe('Store', () =>{

  it('should set initialState for ui', () => {
    const store = createStore(rootReducer, initialState)
    const expected = {
      confirm: {}
    }
    expect(store.getState().ui).to.deep.equal(expected)
  })

  it('should handle actions for ui', () => {
    const store = createStore(rootReducer, initialState)
    const expected = {
      confirm: {
        title: 'Please confirm',
        body: 'do you confirm ?',
        action: {type: 'SOME_ACTION_TYPE'}
      }
    }
    store.dispatch(UiActions.needConfirm({
      title: 'Please confirm',
      body: 'do you confirm ?',
      action: {type: 'SOME_ACTION_TYPE'}
    }))
    expect(store.getState().ui).to.deep.equal(expected)
    store.dispatch(UiActions.clearConfirm())
    expect(store.getState().ui).to.deep.equal({
      confirm: {}
    })
  })

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
          [ItemCategory.BOARDGAME]: 1,
          players: [
            {
              [ItemCategory.PLAYER]: 2,
              score: 5,
              win: false
            },
            {
              [ItemCategory.PLAYER]: 1,
              score: 25,
              win: true
            },
            {
              [ItemCategory.PLAYER]: 3,
              score: 5,
              win: false
            }
          ]
        },
        2: {
          id: 2,
          [ItemCategory.BOARDGAME]: 2,
          players: [
            {
              [ItemCategory.PLAYER]: 3,
              score: 5,
              win: true
            },
            {
              [ItemCategory.PLAYER]: 1,
              score: 0,
              win: false
            },
            {
              [ItemCategory.PLAYER]: 2,
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
      boardGames: {
        items: {
          1: {
            id: 1,
            name: 'Earth Reborn',
            [ItemCategory.GAME]: []
          },
          2: {
            id: 2,
            name: 'Dungeon Twister',
            [ItemCategory.GAME]: [2]
          }
        },
        nextId: 3
      },
      players: {
        items: {
          1: {
            id: 1,
            name: 'Tom',
            [ItemCategory.GAME]: [2]
          },
          2: {
            id: 2,
            name: 'Sim',
            [ItemCategory.GAME]: [2]
          },
          3: {
            id: 3,
            name: 'Quen',
            [ItemCategory.GAME]: [2]
          }
        },
        nextId: 4
      },
      games: {
        nextId: 3,
        items: {
          2: {
            id: 2,
            [ItemCategory.BOARDGAME]: 2,
            players: [
              {
                [ItemCategory.PLAYER]: 3,
                score: 5,
                win: true
              },
              {
                [ItemCategory.PLAYER]: 1,
                score: 0,
                win: false
              },
              {
                [ItemCategory.PLAYER]: 2,
                score: 0,
                win: true
              }
            ]
          }
        }
      }
    }
    const pickOnlyData = R.pickAll(['boardGames', 'players', 'games'])
    expect(pickOnlyData(store.getState())).to.deep.equal(expected)
    store.dispatch(ItemActions.addItemWithLinks(
      {
        id: 3,
        [ItemCategory.BOARDGAME]: 1,
        players: [
          {
            [ItemCategory.PLAYER]: 3,
            score: 5,
            win: true
          },
          {
            [ItemCategory.PLAYER]: 1,
            score: 0,
            win: false
          }
        ]
      },
      ItemCategory.GAME,
      [ItemCategory.BOARDGAME, ItemCategory.PLAYER]
    ))
    const expectedAfterAdd = {
      boardGames: {
        items: {
          1: {
            id: 1,
            name: 'Earth Reborn',
            [ItemCategory.GAME]: [3]
          },
          2: {
            id: 2,
            name: 'Dungeon Twister',
            [ItemCategory.GAME]: [2]
          }
        },
        nextId: 3
      },
      players: {
        items: {
          1: {
            id: 1,
            name: 'Tom',
            [ItemCategory.GAME]: [2, 3]
          },
          2: {
            id: 2,
            name: 'Sim',
            [ItemCategory.GAME]: [2]
          },
          3: {
            id: 3,
            name: 'Quen',
            [ItemCategory.GAME]: [2, 3]
          }
        },
        nextId: 4
      },
      games: {
        nextId: 4,
        items: {
          2: {
            id: 2,
            [ItemCategory.BOARDGAME]: 2,
            players: [
              {
                [ItemCategory.PLAYER]: 3,
                score: 5,
                win: true
              },
              {
                [ItemCategory.PLAYER]: 1,
                score: 0,
                win: false
              },
              {
                [ItemCategory.PLAYER]: 2,
                score: 0,
                win: true
              }
            ]
          },
          3: {
            id: 3,
            [ItemCategory.BOARDGAME]: 1,
            players: [
              {
                [ItemCategory.PLAYER]: 3,
                score: 5,
                win: true
              },
              {
                [ItemCategory.PLAYER]: 1,
                score: 0,
                win: false
              }
            ]
          }
        }
      }
    }
    expect(pickOnlyData(store.getState())).to.deep.equal(expectedAfterAdd)
  })
})
