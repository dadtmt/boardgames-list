import {connect} from 'react-redux'
import AddPlayer from '../components/AddPlayer'
import { PLAYER } from '../constants/itemCategory'
import { addItemByName } from '../actions/itemActions'

export function mapStateToProps(){
  return {
  }
}

export function mapDispatchToProps(dispatch){
  return {
    onSubmit: (item) => dispatch(addItemByName(PLAYER, item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer)
