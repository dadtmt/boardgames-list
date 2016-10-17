import {expect} from 'chai'
import {
   mapStateToProps,
   mapDispatchToProps
 } from './BoardGameListContainer'
import { BOARDGAME } from '../constants/itemCategory'
import { deleteItem } from '../actions/itemActions'

describe('BoardGameListContainer mapStateToProps', () => {
  it('should return {items: sorted by name array of items}', () => {
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

    const expected = [
      {
        id: 2,
        name: 'Dungeon Twister'
      },
      {
        id: 1,
        name: 'Earth Reborn'
      }
    ]
    expect(mapStateToProps(fakeState).items).to.eql(expected)
  })
})

describe('BoardGameListContainer mapDispatchToProps', () => {
  it('should return {itemsHOF: a higher function that build onDelete function', () => {
    const fakeDispatch = (someFunction) => someFunction
    const fakeItem = {
      id: 1
    }
    expect(mapDispatchToProps(fakeDispatch).itemsHOF(fakeItem).onDelete())
    .to.eql(deleteItem(BOARDGAME, 1))
  })
})
