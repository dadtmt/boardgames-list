import R from 'ramda'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import { sortedBoardGamesArraySelector } from '../selectors/boardGamesSelectors'
import { gamesNextId, getGameById } from '../selectors/gamesSelectors'
import { BOARDGAME, PLAYER, GAME } from '../constants/itemCategory'
import { addItemWithLinks } from '../actions/itemActions'
import { initializeWithConfirm } from '../actions/formActions'
import AddGame from '../components/AddGame'

export function mapStateToProps(state){
  return {
    boardGames: sortedBoardGamesArraySelector(state),
    nextId: gamesNextId(state),
    currentItem: R.pipe(
      getGameById(formValueSelector('addGame')(state, 'id')),
      R.when(R.isNil, R.always({}))
    )(state)
  }
}

export function mapDispatchToProps(dispatch){
  return {
    onSubmit: (oldValues, values) => dispatch(
      addItemWithLinks(
        oldValues,
        values,
        GAME,
        [BOARDGAME, PLAYER]
      )
    ),
    onReset: (initialValues) => dispatch(
      initializeWithConfirm('addGame')(initialValues)
    )
  }
}

export function mergeProps(stateProps, dispatchProps, ownProps){
  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    onSubmit: (values) => dispatchProps.onSubmit(
      stateProps.currentItem,
      R.when(
        R.pipe(
          R.prop('id'),
          R.isNil
        ),
        R.assoc('id', stateProps.nextId)
    )(values)),
    onReset: () => dispatchProps.onReset(stateProps.currentItem)
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AddGame)
