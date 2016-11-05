import R from 'ramda'
import { connect } from 'react-redux'
import { getBoardGameById } from '../selectors/boardGamesSelectors'
import BoardGamePage from '../components/BoardGamePage'

export const mapStateToProps = state => ({
  error: R.pipe(
    R.path(['boardGames', 'linkError']),
    R.ifElse(
      R.isNil,
      R.always(''),
      R.pipe(
        R.path(['payload', 'id']),
        R.flip(getBoardGameById)(state),
        R.prop('name'),
        R.concat('Failed to delete '),
        R.flip(R.concat)(' because it is linked in some games.')
      )
    )
  )(state)
})

export const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(BoardGamePage)
