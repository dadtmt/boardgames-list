import { connect } from 'react-redux'
import GameList from '../components/GameList'
import { populateGames } from '../selectors/gamesSelectors'
import { removeGame } from '../actions/gamesActions'
// import {} from '../actions/gamesActions'

export function mapStateToProps(state){
  return {
    items: populateGames(state)
  }
}

export function mapDispatchToProps(dispatch){
  return {
    removeItem: (id) => dispatch(removeGame(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList)
export {GameList as PureGameListContainer}
