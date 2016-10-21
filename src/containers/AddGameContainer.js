import { connect } from 'react-redux'
import { sortedBoardGamesArraySelector } from '../selectors/boardGamesSelectors'
import { sortedPlayersArraySelector } from '../selectors/playersSelectors'
import AddGame from '../components/AddGame'

export function mapStateToProps(state){
  return {
    boardGames: sortedBoardGamesArraySelector(state),
    players: sortedPlayersArraySelector(state)
  }
}

export function mapDispatchToProps(){
  return {
    onSubmit: values => console.log(values)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGame)
