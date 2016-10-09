import {ADD_BOARDGAME, REMOVE_BOARDGAME} from '../constants/actionTypes'

export const addBoardGame = (item) => ({
  type: ADD_BOARDGAME,
  payload: item
})

export const removeBoardGame = (id) => ({
  type: REMOVE_BOARDGAME,
  payload: {id}
})
