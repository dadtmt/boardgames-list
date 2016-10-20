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
