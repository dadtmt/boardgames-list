
import R from 'ramda'
import { createSelector } from 'reselect'
import { indexBoardGames } from './boardGamesSelectors'
import { indexPlayers } from './playersSelectors'
import { lensItems, lensNextId } from '../reducers/itemsUtils'
import { BOARDGAME, PLAYER} from '../constants/itemCategory'

export const allGamesSelector = R.prop('games')

export const gamesNextId = createSelector(
  allGamesSelector,
  R.view(lensNextId)
)

export const populateBoardgame = R.curry(
  (boardGamesIndex, game) =>
    R.over(
      R.lensProp(BOARDGAME),
      R.flip(R.prop)(boardGamesIndex)
    )(game)
)

export const populatePlayers = R.curry(
  (playersIndex, game) =>
    R.over(
      R.lensProp('players'),
      R.map(
        R.over(
          R.lensProp(PLAYER),
          R.flip(R.prop)(playersIndex)
        )
      )
    )(game)
)

export const populateGames = createSelector(
  [allGamesSelector, indexBoardGames, indexPlayers],
  (gamesState, boardGamesIndex, playersIndex) =>
    R.pipe(
      R.view(lensItems),
      R.map(
        R.pipe(
          populateBoardgame(boardGamesIndex),
          populatePlayers(playersIndex)
        )
      ),
      R.values
    )(gamesState)
)
