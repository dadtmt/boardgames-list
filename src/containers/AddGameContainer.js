import R from 'ramda'
import { connect } from 'react-redux'
import { sortedBoardGamesArraySelector } from '../selectors/boardGamesSelectors'
import { gamesNextId } from '../selectors/gamesSelectors'
import { BOARDGAME, PLAYER, GAME } from '../constants/itemCategory'
import { addItemWithLinks } from '../actions/itemActions'
import AddGame from '../components/AddGame'

export function mapStateToProps(state){
  return {
    boardGames: sortedBoardGamesArraySelector(state),
    nextId: gamesNextId(state)
  }
}

export function mapDispatchToProps(dispatch){
  return {
    onSubmit: (nextId, values) => dispatch(
      addItemWithLinks(
          R.assoc('id', nextId, values),
          GAME,
          [BOARDGAME, PLAYER]
        )
    )
  }
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...ownProps,
    ...stateProps,
    onSubmit: values => dispatchProps.onSubmit(stateProps.nextId, values)
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AddGame)
