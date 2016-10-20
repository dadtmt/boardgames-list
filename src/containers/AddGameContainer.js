import { connect } from 'react-redux'
import { sortedBoardGamesArraySelector } from '../selectors/boardGamesSelectors'
import AddGame from '../components/AddGame'

export function mapStateToProps(state){
  return {
    boardGames: sortedBoardGamesArraySelector(state)
  }
}

export function mapDispatchToProps(){
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGame)
