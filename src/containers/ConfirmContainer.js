import R from 'ramda'
import {connect} from 'react-redux'
import Confirm from '../components/Confirm'
import { clearConfirm } from '../actions/uiActions'

export const mapStateToProps = (state, { path }) => R.ifElse(
  R.anyPass([R.isEmpty, R.isNil]),
  R.always({
    title: '',
    body: '',
    action: {},
    show: false
  }),
  R.assoc('show', true)
)(R.path([...path, 'confirm'], state))

export const mapDispatchToProps = (dispatch, { path }) => (
  {
    onClose: () => dispatch(clearConfirm(path)),
    onConfirm: action => {
      dispatch(clearConfirm(path))
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
