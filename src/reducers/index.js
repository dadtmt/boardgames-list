import R from 'ramda'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import createReducer from './createReducer'
import { deletable, addByNameable } from './itemsReducer'
import { BOARDGAME, PLAYER, GAME} from '../constants/itemCategory'
import initialState from './initialState'

const rootReducer = combineReducers({
  boardGames: R.pipe(
      deletable(BOARDGAME),
      addByNameable(BOARDGAME)
    )(createReducer(initialState.boardGames, {})),
  players: R.pipe(
        deletable(PLAYER),
        addByNameable(PLAYER)
    )(createReducer(initialState.players, {})),
  games: deletable(GAME)(createReducer(initialState.games, {})),
  routing: routerReducer,
  form
})

export default rootReducer
