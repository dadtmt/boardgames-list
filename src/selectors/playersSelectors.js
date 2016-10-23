import R from 'ramda'
import {createSelector} from 'reselect'
import {getItemsSortByName, lensItems} from '../reducers/itemsUtils'

export const allPlayersSelector = R.prop('players')

export const sortedPlayersArraySelector = createSelector(
  allPlayersSelector,
  getItemsSortByName
)

export const indexPlayers = createSelector(
  allPlayersSelector,
  R.view(lensItems)
)
