import {connect} from 'react-redux'
import AddPlayer from '../components/AddPlayer'
import {addPlayer} from '../actions/playersActions'

export function mapStateToProps(){
  return {
  }
}

export function mapDispatchToProps(dispatch){
  return {
    onSubmit: (item) => dispatch(addPlayer(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer)
