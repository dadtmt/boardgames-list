import { expect } from 'chai'
import {
  allPlayersSelector,
  sortedPlayersArraySelector,
  indexPlayers
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

describe('indexPlayers', () => {
  it('should return an object of players with ids as keys', () => {
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
    const expected = {
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
    }
    expect(indexPlayers(fakeState)).to.eql(expected)
  })
})
