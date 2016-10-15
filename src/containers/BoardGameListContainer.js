import {connect} from 'react-redux'
import BoardGameList from '../components/BoardGameList'
import {sortedBoardGamesArraySelector} from '../selectors/boardGamesSelectors'
import { BOARDGAME } from '../constants/itemCategory'
import { deleteItem } from '../actions/itemActions'

export function mapStateToProps(state){
  return {
    items: sortedBoardGamesArraySelector(state)
  }
}

export function mapDispatchToProps(dispatch){
  return {
    removeItem: (id) => dispatch(deleteItem(BOARDGAME, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardGameList)
export {BoardGameList as PureBoardGameListContainer}
