import {expect} from 'chai'
import {ADD_PLAYER, REMOVE_PLAYER} from '../constants/actionTypes'
import {addPlayer, removePlayer} from './playersActions'

describe('ADD_PLAYER action', () => {
  it('should create an action with ADD_PLAYER type item as payload', () => {

    const item = {
      name: 'Blood Bowl'
    }
    const expected = {
      type: ADD_PLAYER,
      payload: {
        name: 'Blood Bowl'
      }
    }
    expect(addPlayer(item)).to.eql(expected)
  })
})


describe('REMOVE_PLAYER action', () => {
  it('should create an action with REMOVE_PLAYER type and boardgame id in payload', () => {
    const expected = {
      type: REMOVE_PLAYER,
      payload: {
        id: 1
      }
    }
    expect(removePlayer(1)).to.eql(expected)
  })
})
