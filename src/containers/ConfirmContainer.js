import R from 'ramda'
import {connect} from 'react-redux'
import Confirm from '../components/Confirm'
import { clearConfirm } from '../actions/uiActions'

export const mapStateToProps = state => R.ifElse(
  R.isEmpty,
  R.always({
    title: '',
    body: '',
    action: {},
    show: false
  }),
  R.assoc('show', true)
)(R.path(['ui', 'confirm'], state))

export const mapDispatchToProps = dispatch => (
  {
    onClose: () => dispatch(clearConfirm()),
    onConfirm: action => {
      dispatch(clearConfirm())
      dispatch(action)
    }
  }
)

export const mergeProps = (stateProps, dispatchProps, ownProps) => (
  {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    onConfirm: () => dispatchProps.onConfirm(stateProps.action)
  }
)

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Confirm)
