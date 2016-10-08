
import R from 'ramda'
import {createSelector} from 'reselect'
import {getItemsSortByName} from '../reducers/itemsUtils'

export const allBoardGamesSelector = R.prop('boardGames')

export const sortedBoardGamesArraySelector = createSelector(
  allBoardGamesSelector,
  getItemsSortByName
)
