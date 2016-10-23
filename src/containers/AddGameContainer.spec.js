import { expect } from 'chai'
import {
   mapStateToProps
 } from './AddGameContainer'

describe('AddGameContainer mapStateToProps', () => {
  it('should return {boardGames, gameNextId}', () => {
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
      nextId: 4
    }
    expect(mapStateToProps(fakeState)).to.eql(expected)
  })
})
