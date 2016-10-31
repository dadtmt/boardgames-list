import {expect} from 'chai'
import { initialize } from 'redux-form'
import {
   mapStateToProps,
   mapDispatchToProps
 } from './GameListContainer'
import { GAME } from '../constants/itemCategory'
import { needConfirm } from '../actions/uiActions'
import { deleteItem } from '../actions/itemActions'

describe('GameListContainer mapStateToProps', () => {
  it('should return { items: populateGames}', () => {
    const fakeState = {
      boardGames: {
        items: {
          1: {
            id: 1,
            name: 'Earth Reborn'
          },
          2: {
            id: 2,
            name: 'Dungeon Twister'
          }
        },
        nextId: 3
      },
      players: {
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
      games: {
        nextId: 3,
        items: {
          1: {
            id: 1,
            BOARDGAME: 1,
            players: [
              {
                PLAYER:2,
                score: 5,
                win: false
              },
              {
                PLAYER:1,
                score: 25,
                win: true
              },
              {
                PLAYER:3,
                score: 5,
                win: false
              }
            ]
          },
          2: {
            id: 2,
            BOARDGAME: 2,
            players: [
              {
                PLAYER:3,
                score: 5,
                win: true
              },
              {
                PLAYER:1,
                score: 0,
                win: false
              },
              {
                PLAYER:2,
                score: 0,
                win: true
              }
            ]
          }
        }
      }
    }
    const expected = {
      items: [
        {
          id: 1,
          BOARDGAME: {
            id: 1,
            name: 'Earth Reborn'
          },
          players: [
            {
              PLAYER:{
                id: 2,
                name: 'Sim'
              },
              score: 5,
              win: false
            },
            {
              PLAYER:{
                id: 1,
                name: 'Tom'
              },
              score: 25,
              win: true
            },
            {
              PLAYER:{
                id: 3,
                name: 'Quen'
              },
              score: 5,
              win: false
            }
          ],
          values: {
            id: 1,
            BOARDGAME: 1,
            players: [
              {
                PLAYER:2,
                score: 5,
                win: false
              },
              {
                PLAYER:1,
                score: 25,
                win: true
              },
              {
                PLAYER:3,
                score: 5,
                win: false
              }
            ]
          }
        },
        {
          id: 2,
          BOARDGAME: {
            id: 2,
            name: 'Dungeon Twister'
          },
          players: [
            {
              PLAYER:{
                id: 3,
                name: 'Quen'
              },
              score: 5,
              win: true
            },
            {
              PLAYER:{
                id: 1,
                name: 'Tom'
              },
              score: 0,
              win: false
            },
            {
              PLAYER:{
                id: 2,
                name: 'Sim'
              },
              score: 0,
              win: true
            }
          ],
          values: {
            id: 2,
            BOARDGAME: 2,
            players: [
              {
                PLAYER:3,
                score: 5,
                win: true
              },
              {
                PLAYER:1,
                score: 0,
                win: false
              },
              {
                PLAYER:2,
                score: 0,
                win: true
              }
            ]
          }
        }
      ]
    }
    expect(mapStateToProps(fakeState)).to.eql(expected)
  })
})

describe('GameListContainer mapDispatchToProps', () => {
  it('should return {itemsHOF: a higher function that build onDelete function', () => {
    const fakeDispatch = (someFunction) => someFunction
    const fakeItem = {
      id: 1
    }
    expect(mapDispatchToProps(fakeDispatch).itemsHOF(fakeItem).onDelete())
    .to.eql(needConfirm({
      title: 'Delete game confirmation',
      body: 'Click confirm to delete this game',
      action: deleteItem(GAME, 1)
    }))
  })
  it('should return {itemsHOF: a higher function that build onEdit function', () => {
    const fakeDispatch = (someFunction) => someFunction
    const fakeItem = {
      id: 1,
      BOARDGAME: {
        id: 1,
        name: 'Earth Reborn'
      },
      players: [
        {
          PLAYER:{
            id: 2,
            name: 'Sim'
          },
          score: 5,
          win: false
        },
        {
          PLAYER:{
            id: 1,
            name: 'Tom'
          },
          score: 25,
          win: true
        },
        {
          PLAYER:{
            id: 3,
            name: 'Quen'
          },
          score: 5,
          win: false
        }
      ],
      values: {
        id: 1,
        BOARDGAME: 1,
        players: [
          {
            PLAYER:2,
            score: 5,
            win: false
          },
          {
            PLAYER:1,
            score: 25,
            win: true
          },
          {
            PLAYER:3,
            score: 5,
            win: false
          }
        ]
      }
    }
    // expect(mapDispatchToProps(fakeDispatch).itemsHOF(fakeItem).onEdit())
    // .to.eql(initialize('addGame', fakeItem.values))
  })
})
