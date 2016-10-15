import {connect} from 'react-redux'
import AddBoardGame from '../components/AddBoardGame'
import { BOARDGAME } from '../constants/itemCategory'
import { addItemByName } from '../actions/itemActions'


export function mapStateToProps(){
  return {
  }
}

export function mapDispatchToProps(dispatch){
  return {
    onSubmit: (item) => dispatch(addItemByName(BOARDGAME, item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBoardGame)
