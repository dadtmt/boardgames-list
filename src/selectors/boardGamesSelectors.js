
import R from 'ramda'
import { createSelector } from 'reselect'
import {
  getItemById,
  getItemsSortByName,
  lensItems
} from '../reducers/itemsUtils'

export const allBoardGamesSelector = R.prop('boardGames')

export const getBoardGameById = R.curry((id, state) => R.pipe(
  allBoardGamesSelector,
  getItemById(id)
)(state))

export const sortedBoardGamesArraySelector = createSelector(
  allBoardGamesSelector,
  getItemsSortByName
)

export const indexBoardGames = createSelector(
  allBoardGamesSelector,
  R.view(lensItems)
)
