import R from 'ramda'
import {connect} from 'react-redux'
import GamePage from '../components/GamePage'
import { toggleUi } from '../actions/uiActions'

export const mapStateToProps = state => ({
  showAddForm: R.path(['ui', 'gamePage', 'showAddForm'])(state)
})

export const mapDispatchToProps = dispatch => ({
  onToggle: () => dispatch(toggleUi(['gamePage', 'showAddForm']))
})

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)
