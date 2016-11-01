import R from 'ramda'
import * as UiActionTypes from '../constants/uiActionTypes'
import createReducer from './createReducer'

const handlers = {
  [UiActionTypes.NEED_CONFIRM]: (state, action) => R.assoc(
    'confirm',
    R.prop('payload', action)
  )(state),
  [UiActionTypes.CLEAR_CONFIRM]: state => R.assoc(
    'confirm',
    {}
  )(state),
  [UiActionTypes.TOGGLE_UI]: (state, action) => R.over(
    R.lensPath(R.prop('path', action)), R.not)(state),
  [UiActionTypes.SHOW_UI]: (state, action) => R.set(
    R.lensPath(R.prop('path', action)), R.T())(state)
}

const uiReducer = initialState => createReducer(initialState, handlers)

export default uiReducer
