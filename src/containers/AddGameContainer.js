import { connect } from 'react-redux'
import { sortedBoardGamesArraySelector } from '../selectors/boardGamesSelectors'
import { gamesNextId } from '../selectors/gamesSelectors'
import { BOARDGAME, PLAYER, GAME } from '../constants/itemCategory'
import { addItemWithLinks } from '../actions/itemActions'
import AddGame from '../components/AddGame'

export function mapStateToProps(state){
  return {
    boardGames: sortedBoardGamesArraySelector(state),
    initialValues: {
      id: gamesNextId(state)
    }
  }
}

export function mapDispatchToProps(dispatch){
  return {
    onSubmit: (values) => dispatch(
      addItemWithLinks(
          values,
          GAME,
          [BOARDGAME, PLAYER]
        )
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGame)
