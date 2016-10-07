import initialState from './initialState'
import createReducer from './createReducer'
import {ADD_BOARDGAME, REMOVE_BOARDGAME} from '../constants/actionTypes'
import {addItemToStateByAction, deleteItemFromStateByAction} from './itemsUtils'

const handlers = {
  [ADD_BOARDGAME]: addItemToStateByAction,
  [REMOVE_BOARDGAME]: deleteItemFromStateByAction
}

export default createReducer(initialState.boardGames, handlers)
