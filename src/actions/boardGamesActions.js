import {ADD_BOARDGAME, REMOVE_BOARDGAME} from '../constants/actionTypes'

export const addBoardGame = (name) => ({
  type: ADD_BOARDGAME,
  payload: {
    name
  }
})

export const removeBoardGame = (id) => ({
  type: REMOVE_BOARDGAME,
  payload: {id}
})
