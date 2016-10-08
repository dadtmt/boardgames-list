import {connect} from 'react-redux'
import AddBoardGame from '../components/AddBoardGame'
import {addBoardGame} from '../actions/boardGamesActions'

export function mapStateToProps(){
  return {
  }
}

export function mapDispatchToProps(dispatch){
  return {
    onSubmit: (item) => dispatch(addBoardGame(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBoardGame)
