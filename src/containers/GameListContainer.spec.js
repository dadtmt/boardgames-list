import {expect} from 'chai'
import {
   mapStateToProps,
   mapDispatchToProps
 } from './GameListContainer'
import { GAME } from '../constants/itemCategory'
import { deleteItem } from '../actions/itemActions'

describe('GameListContainer mapStateToProps', () => {
  it('should return { items: populateGames}', () => {
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
      players: {
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
      },
      games: {
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
    }
    const expected = {
      items: [
        {
          id: 1,
          boardGame: {
            id: 1,
            name: 'Earth Reborn'
          },
          players: [
            {
              player:{
                id: 2,
                name: 'Sim'
              },
              score: 5,
              win: false
            },
            {
              player:{
                id: 1,
                name: 'Tom'
              },
              score: 25,
              win: true
            },
            {
              player:{
                id: 3,
                name: 'Quen'
              },
              score: 5,
              win: false
            }
          ]
        },
        {
          id: 2,
          boardGame: {
            id: 2,
            name: 'Dungeon Twister'
          },
          players: [
            {
              player:{
                id: 3,
                name: 'Quen'
              },
              score: 5,
              win: true
            },
            {
              player:{
                id: 1,
                name: 'Tom'
              },
              score: 0,
              win: false
            },
            {
              player:{
                id: 2,
                name: 'Sim'
              },
              score: 0,
              win: true
            }
          ]
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
    .to.eql(deleteItem(GAME, 1))
  })
})
