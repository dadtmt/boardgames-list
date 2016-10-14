import { expect } from 'chai'
import { REMOVE_GAME } from '../constants/actionTypes'
import { removeGame } from './gamesActions'


describe('REMOVE_GAME action', () => {
  it('should create an action with REMOVE_GAME type and game id in payload', () => {
    const expected = {
      type: REMOVE_GAME,
      payload: {
        id: 1
      }
    }
    expect(removeGame(1)).to.eql(expected)
  })
})
