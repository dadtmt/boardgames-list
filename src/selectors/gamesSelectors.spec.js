import { expect } from 'chai'
import {
  allGamesSelector,
  getGameById,
  gamesNextId,
  populateBoardgame,
  populatePlayers,
  populateGames
} from './gamesSelectors'

describe('allgamesSelector', () => {
  it('should return games state slice from state', () => {
    const fakeState = {
      games: {
        nextId: 3,
        items: {
          1: {
            id: 1,
            BOARDGAME: 1,
            players: [
              {
                PLAYER:2,
                score: 5,
                win: false
              },
              {
                PLAYER:1,
                score: 25,
                win: true
              },
              {
                PLAYER:3,
                score: 5,
                win: false
              }
            ]
          },
          2: {
            id: 2,
            BOARDGAME: 2,
            players: [
              {
                PLAYER:3,
                score: 5,
                win: true
              },
              {
                PLAYER:1,
                score: 0,
                win: false
              },
              {
                PLAYER:2,
                score: 0,
                win: true
              }
            ]
          }
        }
      }
    }
    expect(allGamesSelector(fakeState)).to.eql(fakeState.games)
  })
})

describe('getGameById', () => {
  it('should get a game by id', () => {
    const fakeState = {
      games: {
        nextId: 3,
        items: {
          1: {
            id: 1,
            BOARDGAME: 1,
            players: [
              {
                PLAYER:2,
                score: 5,
                win: false
              },
              {
                PLAYER:1,
                score: 25,
                win: true
              },
              {
                PLAYER:3,
                score: 5,
                win: false
              }
            ]
          },
          2: {
            id: 2,
            BOARDGAME: 2,
            players: [
              {
                PLAYER:3,
                score: 5,
                win: true
              },
              {
                PLAYER:1,
                score: 0,
                win: false
              },
              {
                PLAYER:2,
                score: 0,
                win: true
              }
            ]
          }
        }
      }
    }
    const expected = {
      id: 1,
      BOARDGAME: 1,
      players: [
        {
          PLAYER:2,
          score: 5,
          win: false
        },
        {
          PLAYER:1,
          score: 25,
          win: true
        },
        {
          PLAYER:3,
          score: 5,
          win: false
        }
      ]
    }
    expect(getGameById(1)(fakeState)).to.eql(expected)
  })
})

describe('gamesNextId', () => {
  it('should return games nextId', () => {
    const fakeState = {
      games: {
        nextId: 3,
        items: {
          1: {
            id: 1,
            BOARDGAME: 1,
            players: [
              {
                PLAYER:2,
                score: 5,
                win: false
              },
              {
                PLAYER:1,
                score: 25,
                win: true
              },
              {
                PLAYER:3,
                score: 5,
                win: false
              }
            ]
          },
          2: {
            id: 2,
            BOARDGAME: 2,
            players: [
              {
                PLAYER:3,
                score: 5,
                win: true
              },
              {
                PLAYER:1,
                score: 0,
                win: false
              },
              {
                PLAYER:2,
                score: 0,
                win: true
              }
            ]
          }
        }
      }
    }
    expect(gamesNextId(fakeState)).to.equal(3)
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
      BOARDGAME: 1,
      players: [
        {
          PLAYER:2,
          score: 5,
          win: false
        },
        {
          PLAYER:1,
          score: 25,
          win: true
        },
        {
          PLAYER:3,
          score: 5,
          win: false
        }
      ]
    }
    const expected = {
      id: 1,
      BOARDGAME: {
        id: 1,
        name: 'Earth Reborn'
      },
      players: [
        {
          PLAYER:2,
          score: 5,
          win: false
        },
        {
          PLAYER:1,
          score: 25,
          win: true
        },
        {
          PLAYER:3,
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
      BOARDGAME: 1,
      players: [
        {
          PLAYER:'2',
          score: 5,
          win: false
        },
        {
          PLAYER:1,
          score: 25,
          win: true
        },
        {
          PLAYER:3,
          score: 5,
          win: false
        }
      ]
    }
    const expected = {
      id: 1,
      BOARDGAME: 1,
      players: [
        {
          PLAYER: {
            id: 2,
            name: 'Sim'
          },
          score: 5,
          win: false
        },
        {
          PLAYER: {
            id: 1,
            name: 'Tom'
          },
          score: 25,
          win: true
        },
        {
          PLAYER: {
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
        items: {
          1: {
            id: 1,
            name: 'Earth Reborn'
          },
          2: {
            id: 2,
            name: 'Dungeon Twister'
          }
        },
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
      },
      games: {
        nextId: 3,
        items: {
          1: {
            id: 1,
            BOARDGAME: 1,
            players: [
              {
                PLAYER:2,
                score: 5,
                win: false
              },
              {
                PLAYER:1,
                score: 25,
                win: true
              },
              {
                PLAYER:3,
                score: 5,
                win: false
              }
            ]
          },
          2: {
            id: 2,
            BOARDGAME: 2,
            players: [
              {
                PLAYER:3,
                score: 5,
                win: true
              },
              {
                PLAYER:1,
                score: 0,
                win: false
              },
              {
                PLAYER:2,
                score: 0,
                win: true
              }
            ]
          }
        }
      }
    }
    const expected = [
      {
        id: 1,
        BOARDGAME: {
          id: 1,
          name: 'Earth Reborn'
        },
        players: [
          {
            PLAYER:{
              id: 2,
              name: 'Sim'
            },
            score: 5,
            win: false
          },
          {
            PLAYER:{
              id: 1,
              name: 'Tom'
            },
            score: 25,
            win: true
          },
          {
            PLAYER:{
              id: 3,
              name: 'Quen'
            },
            score: 5,
            win: false
          }
        ],
        values: {
          id: 1,
          BOARDGAME: 1,
          players: [
            {
              PLAYER:2,
              score: 5,
              win: false
            },
            {
              PLAYER:1,
              score: 25,
              win: true
            },
            {
              PLAYER:3,
              score: 5,
              win: false
            }
          ]
        }
      },
      {
        id: 2,
        BOARDGAME: {
          id: 2,
          name: 'Dungeon Twister'
        },
        players: [
          {
            PLAYER:{
              id: 3,
              name: 'Quen'
            },
            score: 5,
            win: true
          },
          {
            PLAYER:{
              id: 1,
              name: 'Tom'
            },
            score: 0,
            win: false
          },
          {
            PLAYER:{
              id: 2,
              name: 'Sim'
            },
            score: 0,
            win: true
          }
        ],
        values: {
          id: 2,
          BOARDGAME: 2,
          players: [
            {
              PLAYER:3,
              score: 5,
              win: true
            },
            {
              PLAYER:1,
              score: 0,
              win: false
            },
            {
              PLAYER:2,
              score: 0,
              win: true
            }
          ]
        }
      }
    ]
    expect(populateGames(fakeState)).to.eql(expected)
  })
})
