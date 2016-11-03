import R from 'ramda'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import createReducer from './createReducer'
import { addable, deletable, addByNameable, linkable } from './itemsReducer'
import { clearable, initializable } from './formPluginReducer'
import uiReducer, { confirmable } from './uiReducer'
import { BOARDGAME, PLAYER, GAME } from '../constants/itemCategory'
import { buildActionType } from '../actions/itemActions'
import initialState from './initialState'

const rootReducer = combineReducers({
  boardGames: R.pipe(
      deletable(BOARDGAME),
      addByNameable(BOARDGAME),
      linkable(GAME, BOARDGAME)
    )(createReducer(initialState.boardGames, {})),
  players: R.pipe(
    deletable(PLAYER),
    addByNameable(PLAYER),
    linkable(GAME, PLAYER)
    )(createReducer(initialState.players, {})),
  games: R.pipe(
      addable(GAME),
      deletable(GAME)
    )(createReducer(initialState.games, {})),
  ui: uiReducer(initialState.ui),
  routing: routerReducer,
  form: form.plugin({
    addGame: R.pipe(
      confirmable(['form', 'addGame']),
      initializable,
      clearable(buildActionType('ADD', GAME))
    )(createReducer({}, {}))
  })
})

export default rootReducer
