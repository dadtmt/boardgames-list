import { combineReducers } from 'redux'
import boardGames from './boardGamesReducer'
import fuelSavings from './fuelSavingsReducer'
import {routerReducer} from 'react-router-redux'
import {reducer as form} from 'redux-form'

const rootReducer = combineReducers({
  boardGames,
  fuelSavings,
  routing: routerReducer,
  form
})

export default rootReducer
