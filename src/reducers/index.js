import { combineReducers } from 'redux'
import boardGames from './boardGamesReducer'
import {routerReducer} from 'react-router-redux'
import {reducer as form} from 'redux-form'

const rootReducer = combineReducers({
  boardGames,
  routing: routerReducer,
  form
})

export default rootReducer
