import { connect } from 'react-redux'
import { sortedPlayersArraySelector } from '../selectors/playersSelectors'
import { PLAYER } from '../constants/itemCategory'
import { deleteItem } from '../actions/itemActions'
import deletableItem from '../hoc/deletableItem'
import listableItem from '../hoc/listableItem'
import Player from '../components/Player'

export function mapStateToProps(state){
  return {
    items: sortedPlayersArraySelector(state)
  }
}

export function mapDispatchToProps(dispatch){
  return {
    itemsHOF: (item) => ({
      onDelete: ()=> dispatch(deleteItem(PLAYER, item.id))
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  listableItem(deletableItem(Player))
)
