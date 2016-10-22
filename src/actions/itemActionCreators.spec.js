import { expect } from 'chai'
import sinon from 'sinon'
import { createAddAction } from './itemActionCreators'
import { gamesNextId } from '../selectors/gamesSelectors'

describe('createAddAction', () => {
  it.only('should create an addItemWithLinks action', () => {
    const item = {
      BOARDGAME: 2,
      players: [
        {
          PLAYER: 3,
          score: 5,
          win : true
        },
        {
          PLAYER: 4,
          score: 2,
          win : false
        }
      ]
    }
    const fakeGetState = () => ({
      games: {
        nextId: 1
      }
    })
    const fakeDispatch = sinon.spy()
    const expected = {
      type: 'ADD_GAME',
      links: {
        BOARDGAME: [2],
        PLAYER: [3, 4]
      },
      payload: {
        id: 1,
        BOARDGAME: 2,
        players: [
          {
            PLAYER: 3,
            score: 5,
            win : true
          },
          {
            PLAYER: 4,
            score: 2,
            win : false
          }
        ]
      }
    }
    const createAction = createAddAction(
      'GAME',
      ['BOARDGAME', 'PLAYER'],
      gamesNextId,
      item
    )
    createAction(fakeDispatch, fakeGetState)
    expect(fakeDispatch.args[0][0]).to.eql(expected)
  })
})
