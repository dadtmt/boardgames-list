import R from 'ramda'
import { expect } from 'chai'
import {
   mapStateToProps,
   mapDispatchToProps,
   mergeProps
 } from './AddGameContainer'
import { BOARDGAME, PLAYER, GAME } from '../constants/itemCategory'
import { addItemWithLinks } from '../actions/itemActions'
import { initializeWithConfirm } from '../actions/formActions'

describe('AddGameContainer mapStateToProps', () => {
  it('should return {boardGames, nextId, currentItem empty} in case of new item', () => {
    const fakeState = {
      boardGames: {
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
      },
      games: {
        items: {
          1: {
            id: 1,
            name: 'Tom'
          },
          2: {
            id: 2,
            name: 'Sim'
          },
          3: {
            id: 3,
            name: 'Quen'
          }
        },
        nextId: 4
      }
    }

    const expected = {
      boardGames: [
        {
          id: 2,
          name: 'Dungeon Twister'
        },
        {
          id: 1,
          name: 'Earth Reborn'
        }
      ],
      nextId: 4,
      currentItem: {}
    }
    expect(mapStateToProps(fakeState)).to.eql(expected)
  })

  it('should return {boardGames, nextId, currentItem defined} in case of editing item', () => {
    const fakeState = {
      boardGames: {
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
      },
      games: {
        items: {
          1: {
            id: 1,
            name: 'Tom'
          },
          2: {
            id: 2,
            name: 'Sim'
          },
          3: {
            id: 3,
            name: 'Quen'
          }
        },
        nextId: 4
      },
      form: {
        addGame: {
          values: {
            id: 1
          }
        }
      }
    }

    const expected = {
      boardGames: [
        {
          id: 2,
          name: 'Dungeon Twister'
        },
        {
          id: 1,
          name: 'Earth Reborn'
        }
      ],
      nextId: 4,
      currentItem: {
        id: 1,
        name: 'Tom'
      }
    }
    expect(mapStateToProps(fakeState)).to.eql(expected)
  })
})

describe('AddGameContainer mapDispatchToProps', () => {
  it('should return onSubmit', () => {
    const fakeDispatch = (someFunction) => someFunction
    const oldValues = {
      id: 1
    }
    const values = {
      id: 2
    }
    expect(mapDispatchToProps(fakeDispatch).onSubmit(oldValues, values))
    .to.eql(addItemWithLinks(
      oldValues,
      values,
      GAME,
      [BOARDGAME, PLAYER]
    ))
  })
  it('should return onReset', () => {
    const fakeDispatch = (someFunction) => someFunction
    const initialValues = {id:5}
    expect(mapDispatchToProps(fakeDispatch).onReset(initialValues))
    .to.eql(initializeWithConfirm('addGame')(initialValues))
  })
  it('should return onNew', () => {
    const fakeDispatch = (someFunction) => someFunction
    expect(mapDispatchToProps(fakeDispatch).onNew())
    .to.eql(initializeWithConfirm('addGame')({}))
  })
})

describe('AddGameContainer mergeProps', () => {
  it('should return all props merged with onSubmit and on reset', () => {
    const fakeState = {
      boardGames: {
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
      },
      games: {
        items: {
          1: {
            id: 1,
            name: 'Tom'
          },
          2: {
            id: 2,
            name: 'Sim'
          },
          3: {
            id: 3,
            name: 'Quen'
          }
        },
        nextId: 4
      },
      form: {
        addGame: {
          values: {
            id: 1
          }
        }
      }
    }
    const fakeDispatch = (someFunction) => someFunction
    const fakeProps = {some:'props'}
    const mergedProps = mergeProps(
      mapStateToProps(fakeState),
      mapDispatchToProps(fakeDispatch),
      fakeProps
    )
    expect(
      R.omit(
        ['onSubmit', 'onReset', 'onNew'],
        mergedProps
      )
    ).to.eql(R.omit(
      ['onSubmit', 'onReset', 'onNew'],
      {
        ...fakeProps,
        ...mapStateToProps(fakeState),
        ...mapDispatchToProps(fakeDispatch)
      }
    ))
    expect(mergedProps.onSubmit({id:3, some:'values'})).eql(addItemWithLinks(
      mapStateToProps(fakeState).currentItem,
      {id:3, some:'values'},
      GAME,
      [BOARDGAME, PLAYER]
    ))
    expect(mergedProps.onReset()).eql(
      initializeWithConfirm('addGame')(mapStateToProps(fakeState).currentItem)
    )
  })
})
