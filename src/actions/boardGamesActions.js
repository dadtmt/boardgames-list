import {REMOVE_BOARDGAME} from '../constants/actionTypes'

export const removeBoardGame = (id) => ({
  type: REMOVE_BOARDGAME,
  payload: {id}
})
