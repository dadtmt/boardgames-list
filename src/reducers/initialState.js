import { GAME } from '../constants/itemCategory'

export default {
  boardGames: {
    items: {
      1: {
        id: 1,
        name: 'Earth Reborn',
        [GAME]: [1]
      },
      2: {
        id: 2,
        name: 'Dungeon Twister',
        [GAME]: [2]
      }
    },
    nextId: 3
  },
  players: {
    items: {
      1: {
        id: 1,
        name: 'Tom',
        [GAME]: [1, 2]
      },
      2: {
        id: 2,
        name: 'Sim',
        [GAME]: [1, 2]
      },
      3: {
        id: 3,
        name: 'Quen',
        [GAME]: [1, 2]
      }
    },
    nextId: 4
  },
  games: {
    nextId: 3,
    items: {
      1: {
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
      2: {
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
    }
  }
}
