import {REMOVE_GAME} from '../constants/actionTypes'

export const removeGame = (id) => ({
  type: REMOVE_GAME,
  payload: {id}
})
