import {prop, map, keys, __} from 'ramda'
import {createSelector} from 'reselect'

export const allBoardGamesSelector = prop('boardGames')

export const boardGamesArraySelector = createSelector(
  allBoardGamesSelector,
  (state) => map(prop(__, state), keys(state))
)
