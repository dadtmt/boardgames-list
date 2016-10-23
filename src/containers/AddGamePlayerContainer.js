import {connect} from 'react-redux'
import { availableItemsAndSelectedForIndex } from '../selectors/formSelector'
import AddGamePlayer from '../components/AddGamePlayer'


export function mapStateToProps(state, {index}){
  return {
    items: availableItemsAndSelectedForIndex(index, state)
  }
}
export default connect(mapStateToProps)(AddGamePlayer)
