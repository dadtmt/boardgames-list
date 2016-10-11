import { expect } from 'chai'
import {
  allPlayersSelector,
  sortedPlayersArraySelector
} from './playersSelectors'

describe('allPlayersSelector', () => {
  it('should return players state slice from state', () => {
    const fakeState = {
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
      }
    }
    expect(allPlayersSelector(fakeState)).to.eql(fakeState.players)
  })
})

describe('sortedPlayersArraySelector', () => {
  it('should return an array with players from state', () => {
    const fakeState = {
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
      }
    }
    const expected = [
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
    expect(sortedPlayersArraySelector(fakeState)).to.eql(expected)
  })
})
