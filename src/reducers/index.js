import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import createReducer from './createReducer'
import { deletable, addByNameable } from './itemsReducer'
import { BOARDGAME, PLAYER, GAME} from '../constants/itemCategory'
import initialState from './initialState'

const rootReducer = combineReducers({
  boardGames: addByNameable(
    deletable(
      createReducer(initialState.boardGames, {}), BOARDGAME
    ), BOARDGAME
  ),
  players: addByNameable(
    deletable(
      createReducer(initialState.players, {}), PLAYER
    ), PLAYER
  ),
  games: deletable(
    createReducer(initialState.games, {}), GAME
  ),
  routing: routerReducer,
  form
})

export default rootReducer
