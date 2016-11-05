import { expect } from 'chai'
import {
   mapStateToProps,
   mapDispatchToProps
 } from './BoardGamePageContainer'

describe('BoardGamePageContainer mapStateToProps', () => {
  it('should return {error: "cannot delete this game"} if link error', () => {
    const fakeState = {
      boardGames:{
        items: {
          1: {
            id: 1,
            name: 'Earth Reborn',
            GAME: [1]
          },
          2: {
            id: 2,
            name: 'Dungeon Twister',
            GAME: []
          }
        },
        nextId: 3,
        linkError: {
          type: 'DELETE_CATEGORY',
          payload: {
            id: 1
          }
        }
      }
    }
    const expected = {
      error: 'Failed to delete Earth Reborn because it is linked in some games.'
    }
    expect(mapStateToProps(fakeState)).to.eql(expected)
  })

  it('should return {error: ""} if no link error', () => {
    const fakeState = {
      boardGames:{
        items: {
          1: {
            id: 1,
            name: 'Earth Reborn',
            GAME: [1]
          },
          2: {
            id: 2,
            name: 'Dungeon Twister',
            GAME: []
          }
        },
        nextId: 3
      }
    }
    const expected = {
      error: ''
    }
    expect(mapStateToProps(fakeState)).to.eql(expected)
  })
})

// describe('AddBoardGameContainer mapDispatchToProps', () => {
//   it('should return {onSubmit: function that dispatch addBoardGame}', () => {
//     const fakeDispatch = (someFunction) => someFunction
//     const expected = toggleUi(['gamePage', 'showAddForm'])
//     expect(mapDispatchToProps(fakeDispatch)
//     .onToggle()).to.eql(expected)
//   })
// })
