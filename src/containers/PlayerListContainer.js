import {connect} from 'react-redux'
import PlayerList from '../components/PlayerList'
import {sortedPlayersArraySelector} from '../selectors/playersSelectors'
import {removePlayer} from '../actions/playersActions'

export function mapStateToProps(state){
  return {
    items: sortedPlayersArraySelector(state)
  }
}

export function mapDispatchToProps(dispatch){
  return {
    removeItem: (id) => dispatch(removePlayer(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList)
export {PlayerList as PurePlayerListContainer}
