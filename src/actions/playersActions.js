import {ADD_PLAYER, REMOVE_PLAYER} from '../constants/actionTypes'

export const addPlayer = (item) => ({
  type: ADD_PLAYER,
  payload: item
})

export const removePlayer = (id) => ({
  type: REMOVE_PLAYER,
  payload: {id}
})
