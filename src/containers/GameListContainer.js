import R from 'ramda'
import { connect } from 'react-redux'
import { populateGames } from '../selectors/gamesSelectors'
import { BOARDGAME, GAME, PLAYER } from '../constants/itemCategory'
import { needConfirm, showUi } from '../actions/uiActions'
import { initializeWithConfirm } from '../actions/formActions'
import { deleteItemWithLinks } from '../actions/itemActions'
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
      onDelete: () => dispatch(
        needConfirm(['ui'])(
          {
            title: 'Delete game confirmation',
            body: 'Click confirm to delete this game',
            action: deleteItemWithLinks(item, GAME, [BOARDGAME, PLAYER])
          }
        )
      ),
      onEdit: () => {
        dispatch(initializeWithConfirm('addGame')(item.values))
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
