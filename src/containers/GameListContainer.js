import { connect } from 'react-redux'
import { populateGames } from '../selectors/gamesSelectors'
import { GAME } from '../constants/itemCategory'
import { deleteItem } from '../actions/itemActions'
import deletableItem from '../hoc/deletableItem'
import listableItem from '../hoc/listableItem'
import Game from '../components/Game'

export function mapStateToProps(state){
  return {
    items: populateGames(state)
  }
}

export function mapDispatchToProps(dispatch){
  return {
    itemsHOF: (item) => ({
      onDelete: ()=> dispatch(deleteItem(GAME, item.id))
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  listableItem(deletableItem(Game))
)
