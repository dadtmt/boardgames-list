import initialState from './initialState'
import createReducer from './createReducer'
import { deleteItemFromStateByAction } from '../reducers/itemsUtils'
import { REMOVE_GAME } from '../constants/actionTypes'

const handlers = {
  REMOVE_GAME: deleteItemFromStateByAction
}

export default createReducer(initialState.games, handlers)
