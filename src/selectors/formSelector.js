import R from 'ramda'
import { createSelector } from 'reselect'
import { allPlayersSelector } from './playersSelectors'
const NA = 'N/A'

export const selectedPlayers = R.pipe(
  R.pathOr([],['form', 'addGame', 'values', 'players']),
  R.map(R.propOr(NA, 'PLAYER'))
)

export const availableAndSelectedPlayers = createSelector(
  [selectedPlayers, allPlayersSelector],
  (selection, players) => ({
    selected: R.map(
      R.propOr(NA, R.__,  R.prop('items', players))
    )(selection),
    available: R.pipe(
      R.omit(selection),
      R.values
    )(R.prop('items', players))
  })
)

export const availableItemsAndSelectedForIndex = (index, state) =>
  R.converge(
    R.pipe(
      R.append,
      R.without(NA),
      R.sortBy(R.compose(R.toLower, R.prop('name')))
    ),
    [
      R.pipe(
        R.prop('selected'),
        R.nth(index),
        R.when(
          R.isNil,
          R.always(NA)
        )
      ),
      R.prop('available')
    ]
  )(availableAndSelectedPlayers(state))
