import { expect } from 'chai'
import {
  selectedPlayers,
  availableAndSelectedPlayers,
  availableItemsAndSelectedForIndex
} from './formSelector'

const fakeState = {
  "form": {
    "addGame": {
      "registeredFields": [
        {
          "name": "BOARDGAME",
          "type": "Field"
        },
        {
          "name": "players",
          "type": "FieldArray"
        },
        {
          "name": "players[0]",
          "type": "Field"
        },
        {
          "name": "players[0].PLAYER",
          "type": "Field"
        },
        {
          "name": "players[0].score",
          "type": "Field"
        },
        {
          "name": "players[0].win",
          "type": "Field"
        },
        {
          "name": "players[1]",
          "type": "Field"
        },
        {
          "name": "players[1].PLAYER",
          "type": "Field"
        },
        {
          "name": "players[1].score",
          "type": "Field"
        },
        {
          "name": "players[1].win",
          "type": "Field"
        }
      ],
      "values": {
        "players": [
          {
            "PLAYER": "3",
            "score": 3,
            "win": true
          },
          {
            "PLAYER": "1"
          },
          {
            "score": 3
          }
        ]
      },
      "fields": {
        "players": [
          {
            "PLAYER": {
              "visited": true,
              "touched": true
            },
            "score": {
              "visited": true,
              "touched": true
            },
            "win": {
              "visited": true,
              "touched": true
            }
          },
          {
            "PLAYER": {
              "visited": true,
              "touched": true
            }
          }
        ]
      },
      "anyTouched": true
    }
  },
  "players": {
    "items": {
      "1": {
        "id": 1,
        "name": "Tom",
        "GAME": [
          1,
          2
        ]
      },
      "2": {
        "id": 2,
        "name": "Sim",
        "GAME": [
          1,
          2
        ]
      },
      "3": {
        "id": 3,
        "name": "Quen",
        "GAME": [
          1,
          2
        ]
      }
    },
    "nextId": 4
  }
}

const emptyFormState = {
  "form": {
    "addGame": {
      "registeredFields": [
        {
          "name": "BOARDGAME",
          "type": "Field"
        },
        {
          "name": "players",
          "type": "FieldArray"
        }
      ]
    }
  },
  "players": {
    "items": {
      "1": {
        "id": 1,
        "name": "Tom",
        "GAME": [
          1,
          2
        ]
      },
      "2": {
        "id": 2,
        "name": "Sim",
        "GAME": [
          1,
          2
        ]
      },
      "3": {
        "id": 3,
        "name": "Quen",
        "GAME": [
          1,
          2
        ]
      }
    },
    "nextId": 4
  }
}

describe('selectedPlayers', () => {
  it('should returns selectedPlayers form state', () => {
    const expected = ['3', '1', 'N/A']
    expect(selectedPlayers(fakeState)).to.eql(expected)
    expect(selectedPlayers(emptyFormState)).to.eql([])
  })
})

describe('availableAndSelectedPlayers', () => {
  it('should returns availableAndSelectedPlayers form state', () => {
    const expected = {
      available: [
        {
          "id": 2,
          "name": "Sim",
          "GAME": [
            1,
            2
          ]
        }
      ],
      selected: [
        {
          "id": 3,
          "name": "Quen",
          "GAME": [
            1,
            2
          ]
        },
        {
          "id": 1,
          "name": "Tom",
          "GAME": [
            1,
            2
          ]
        },
        'N/A'
      ]
    }
    const expectedWithFormEmpty = {
      available: [
        {
          "id": 1,
          "name": "Tom",
          "GAME": [
            1,
            2
          ]
        },
        {
          "id": 2,
          "name": "Sim",
          "GAME": [
            1,
            2
          ]
        },
        {
          "id": 3,
          "name": "Quen",
          "GAME": [
            1,
            2
          ]
        }
      ],
      selected: []
    }
    expect(availableAndSelectedPlayers(fakeState)).to.eql(expected)
    expect(availableAndSelectedPlayers(emptyFormState)).to.eql(expectedWithFormEmpty)
  })
})

describe('availableItemsAndSelectedForIndex', () => {
  it('should returns available players sorted by name plus the selected one for index', () => {
    const expected = [
      {
        "id": 3,
        "name": "Quen",
        "GAME": [
          1,
          2
        ]
      },
      {
        "id": 2,
        "name": "Sim",
        "GAME": [
          1,
          2
        ]
      }
    ]
    const expectedForFieldWithNoValue = [
      {
        "id": 2,
        "name": "Sim",
        "GAME": [
          1,
          2
        ]
      }
    ]
    const expectedWithFormEmpty = [
      {
        "id": 3,
        "name": "Quen",
        "GAME": [
          1,
          2
        ]
      },
      {
        id: 2,
        name: 'Sim',
        "GAME": [
          1,
          2
        ]
      },
      {
        id: 1,
        name: 'Tom',
        "GAME": [
          1,
          2
        ]
      }
    ]
    expect(availableItemsAndSelectedForIndex(0, fakeState)).to.eql(expected)
    expect(availableItemsAndSelectedForIndex(2, fakeState))
      .to.eql(expectedForFieldWithNoValue)
    expect(availableItemsAndSelectedForIndex(0, emptyFormState)).to.eql(expectedWithFormEmpty)
  })
})
