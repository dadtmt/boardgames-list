import { combineReducers } from 'redux'
import {routerReducer} from 'react-router-redux'
import {reducer as form} from 'redux-form'
import boardGames from './boardGamesReducer'
import players from './playersReducer'

const rootReducer = combineReducers({
  boardGames,
  players,
  routing: routerReducer,
  form
})

export default rootReducer
