import R from 'ramda'
import { connect } from 'react-redux'
import { initialize } from 'redux-form'
import { populateGames } from '../selectors/gamesSelectors'
import { GAME } from '../constants/itemCategory'
import { needConfirm, showUi } from '../actions/uiActions'
import { deleteItem } from '../actions/itemActions'
import deletableItem from '../hoc/deletableItem'
import editableItem from '../hoc/editableItem'
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
      onDelete: () => dispatch(needConfirm({
        title: 'Delete game confirmation',
        body: 'Click confirm to delete this game',
        action: deleteItem(GAME, item.id)
      })),
      onEdit: () => {
        dispatch(initialize('addGame', item.values))
        dispatch(showUi(['gamePage', 'showAddForm']))
      }
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  R.pipe(
    deletableItem,
    editableItem,
    listableItem
  )(Game)
)
