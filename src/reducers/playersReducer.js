import initialState from './initialState'
import createReducer from './createReducer'
import {ADD_PLAYER, REMOVE_PLAYER} from '../constants/actionTypes'
import {addItemToStateByAction, deleteItemFromStateByAction} from './itemsUtils'

const handlers = {
  [ADD_PLAYER]: addItemToStateByAction,
  [REMOVE_PLAYER]: deleteItemFromStateByAction
}

export default createReducer(initialState.players, handlers)
