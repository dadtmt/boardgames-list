import { connect } from 'react-redux'
import GameList from '../components/GameList'
import { populateGames } from '../selectors/gamesSelectors'
import { GAME } from '../constants/itemCategory'
import { deleteItem } from '../actions/itemActions'

export function mapStateToProps(state){
  return {
    items: populateGames(state)
  }
}

export function mapDispatchToProps(dispatch){
  return {
    removeItem: (id) => dispatch(deleteItem(GAME, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList)
export {GameList as PureGameListContainer}
