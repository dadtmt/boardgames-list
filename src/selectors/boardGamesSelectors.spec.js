import { expect } from 'chai'
import {
  allBoardGamesSelector,
  sortedBoardGamesArraySelector
} from './boardGamesSelectors'

describe('allBoardGamesSelector', () => {
  it('should return boardGames state slice from state', () => {
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
    expect(allBoardGamesSelector(fakeState)).to.eql(fakeState.boardGames)
  })
})

describe('sortedBoardGamesArraySelector', () => {
  it('should return an array with boardgames from state', () => {
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
    expect(sortedBoardGamesArraySelector(fakeState)).to.eql(expected)
  })
})
