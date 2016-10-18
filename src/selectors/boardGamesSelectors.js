
import R from 'ramda'
import {createSelector} from 'reselect'
import {getItemsSortByName, lensItems} from '../reducers/itemsUtils'

export const allBoardGamesSelector = R.prop('boardGames')

export const sortedBoardGamesArraySelector = createSelector(
  allBoardGamesSelector,
  getItemsSortByName
)

export const indexBoardGames = createSelector(
  allBoardGamesSelector,
  R.view(lensItems)
)
