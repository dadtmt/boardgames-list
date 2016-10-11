
import R from 'ramda'
import {createSelector} from 'reselect'
import {getItemsSortByName} from '../reducers/itemsUtils'

export const allPlayersSelector = R.prop('players')

export const sortedPlayersArraySelector = createSelector(
  allPlayersSelector,
  getItemsSortByName
)
