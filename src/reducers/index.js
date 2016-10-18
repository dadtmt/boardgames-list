import R from 'ramda'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import createReducer from './createReducer'
import { deletable, addByNameable } from './itemsReducer'
import { BOARDGAME, PLAYER, GAME} from '../constants/itemCategory'
import initialState from './initialState'

const rootReducer = combineReducers({

  // we can intercept at this level that a delete action concerning a boardgame or a player is invalid
  // not passing the action down to boardgdame reducer
  // category will be replace by state slice key in action prop
  // handle addItemByName, deleteItem
  // if ssk is in links (propOr) handle in games, then in links (only for delete)
  // have to be a node ?
  // data: {
  //   games: deletable(GAME)(createReducer(initialState.games, {})),
  //   links :{
  //     boardGames : R.pipe(
  //         deletable(BOARDGAME),
  //         addByNameable(BOARDGAME)
  //     )(createReducer(initialState.boardGames, {})),
  //     players: R.pipe(
  //           deletable(PLAYER),
  //           addByNameable(PLAYER)
  //     )(createReducer(initialState.players, {}))
  //   }
  // }
  //   ,
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
