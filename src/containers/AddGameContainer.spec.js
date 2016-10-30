import { expect } from 'chai'
import {
   mapStateToProps
 } from './AddGameContainer'

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
