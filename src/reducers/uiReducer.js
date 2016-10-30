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
  )(state)
}

const initialState = {
  confirm: {}
}

const uiReducer = createReducer(initialState, handlers)

export default uiReducer
