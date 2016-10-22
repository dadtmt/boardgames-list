import { connect } from 'react-redux'
import { sortedBoardGamesArraySelector } from '../selectors/boardGamesSelectors'
import { sortedPlayersArraySelector } from '../selectors/playersSelectors'
import { gamesNextId } from '../selectors/gamesSelectors'
import { createAddAction } from '../actions/itemActionCreators'
import { BOARDGAME, PLAYER, GAME } from '../constants/itemCategory'
import AddGame from '../components/AddGame'

export function mapStateToProps(state){
  return {
    boardGames: sortedBoardGamesArraySelector(state),
    players: sortedPlayersArraySelector(state)
  }
}

export function mapDispatchToProps(dispatch){
  return {
    onSubmit: values => dispatch(
      createAddAction(
          GAME,
          [BOARDGAME, PLAYER],
          gamesNextId,
          values
        )
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGame)
