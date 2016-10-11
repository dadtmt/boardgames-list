export default {
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
            player:3,
            score: 0,
            win: true
          }
        ]
      }
    ]
  }
}
