import { expect } from 'chai'
import {
  allGamesSelector,
  populateBoardgame,
  populatePlayers,
  populateGames
} from './gamesSelectors'

describe('allgamesSelector', () => {
  it('should return games state slice from state', () => {
    const fakeState = {
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
                player:3,
                score: 0,
                win: true
              }
            ]
          }
        ]
      }
    }
    expect(allGamesSelector(fakeState)).to.eql(fakeState.games)
  })
})

describe('populateBoardgame', () => {
  it('should return game with boardgame object', () => {
    const boardGamesIndex = {
      1: {
        id: 1,
        name: 'Earth Reborn'
      },
      2: {
        id: 2,
        name: 'Dungeon Twister'
      }
    }
    const game = {
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
    }
    const expected = {
      id: 1,
      boardGame: {
        id: 1,
        name: 'Earth Reborn'
      },
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
    }
    expect(populateBoardgame(boardGamesIndex, game)).to.eql(expected)
  })
})

describe('populatePlayers', () => {
  it('should return game with players as objects', () => {
    const playersIndex = {
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
    const game = {
      id: 1,
      boardGame: 1,
      players: [
        {
          player:'2',
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
    }
    const expected = {
      id: 1,
      boardGame: 1,
      players: [
        {
          player: {
            id: 2,
            name: 'Sim'
          },
          score: 5,
          win: false
        },
        {
          player: {
            id: 1,
            name: 'Tom'
          },
          score: 25,
          win: true
        },
        {
          player: {
            id: 3,
            name: 'Quen'
          },
          score: 5,
          win: false
        }
      ]
    }
    expect(populatePlayers(playersIndex, game)).to.eql(expected)
  })
})

describe('populateGames', () => {
  it('should return games items with populated boardgame and player data', () => {
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
    const expected = [
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
    expect(populateGames(fakeState)).to.eql(expected)
  })
})
