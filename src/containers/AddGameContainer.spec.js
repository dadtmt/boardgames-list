import {expect} from 'chai'
import {
   mapStateToProps,
   mapDispatchToProps
 } from './AddGameContainer'

describe('AddGameContainer mapStateToProps', () => {
  it('should return {}', () => {
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
      players: [
        {
          id: 3,
          name: 'Quen'
        },
        {
          id: 2,
          name: 'Sim'
        },
        {
          id: 1,
          name: 'Tom'
        }
      ]
    }
    expect(mapStateToProps(fakeState)).to.eql(expected)
  })
})

describe('AddGameContainer mapDispatchToProps', () => {
  it('should return {}', () => {
    const fakeDispatch = (someFunction) => someFunction
    const expected = {}
    expect(mapDispatchToProps(fakeDispatch)).to.eql(expected)
  })
})
