import { connect } from 'react-redux'
import PlayerList from '../components/PlayerList'
import { sortedPlayersArraySelector } from '../selectors/playersSelectors'
import { PLAYER } from '../constants/itemCategory'
import { deleteItem } from '../actions/itemActions'

export function mapStateToProps(state){
  return {
    items: sortedPlayersArraySelector(state)
  }
}

export function mapDispatchToProps(dispatch){
  return {
    removeItem: (id) => dispatch(deleteItem(PLAYER,id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList)
export {PlayerList as PurePlayerListContainer}
