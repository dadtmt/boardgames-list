import { combineReducers } from 'redux'
import boardGames from './boardGamesReducer'
import fuelSavings from './fuelSavingsReducer'
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
  boardGames,
  fuelSavings,
  routing: routerReducer
})

export default rootReducer
