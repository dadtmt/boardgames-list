import {connect} from 'react-redux'
import {sortedBoardGamesArraySelector} from '../selectors/boardGamesSelectors'
import { BOARDGAME } from '../constants/itemCategory'
import { deleteItem } from '../actions/itemActions'
import deletableItem from '../hoc/deletableItem'
import listableItem from '../hoc/listableItem'
import BoardGame from '../components/BoardGame'

export function mapStateToProps(state){
  return {
    items: sortedBoardGamesArraySelector(state)
  }
}

export function mapDispatchToProps(dispatch){
  return {
    itemsHOF: (item) => ({
      onDelete: ()=> dispatch(deleteItem(BOARDGAME, item.id))
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  listableItem(deletableItem(BoardGame))
)
