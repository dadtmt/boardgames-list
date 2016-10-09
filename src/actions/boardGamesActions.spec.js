import {expect} from 'chai'
import {ADD_BOARDGAME, REMOVE_BOARDGAME} from '../constants/actionTypes'
import {addBoardGame, removeBoardGame} from './boardGamesActions'

describe('ADD_BOARDGAME action', () => {
  it('should create an action with ADD_BOARDGAME type item as payload', () => {

    const item = {
      name: 'Blood Bowl'
    }
    const expected = {
      type: ADD_BOARDGAME,
      payload: {
        name: 'Blood Bowl'
      }
    }
    expect(addBoardGame(item)).to.eql(expected)
  })
})


describe('REMOVE_BOARDGAME action', () => {
  it('should create an action with REMOVE_BOARDGAME type and boardgame id in payload', () => {
    const expected = {
      type: REMOVE_BOARDGAME,
      payload: {
        id: 1
      }
    }
    expect(removeBoardGame(1)).to.eql(expected)
  })
})
