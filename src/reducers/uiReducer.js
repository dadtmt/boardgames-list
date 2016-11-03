import R from 'ramda'
import * as UiActionTypes from '../constants/uiActionTypes'
import { prefixTypeByPath } from '../actions/utils'
import createReducer, {enhanceReducer} from './createReducer'

export const confirmable = path => enhanceReducer(
  {
    [prefixTypeByPath(UiActionTypes.NEED_CONFIRM)(path)]:
      (state, action) => R.assoc(
        'confirm',
        R.prop('payload', action)
      )(state),
    [prefixTypeByPath(UiActionTypes.CLEAR_CONFIRM)(path)]:
      state => R.assoc(
        'confirm',
        {}
      )(state)
  }
)

export const hidable = (path, type) => enhanceReducer(
  {
    [type]: state => R.assocPath(path, R.F())(state)
  }
)

const handlers = {
  [UiActionTypes.TOGGLE_UI]: (state, action) => R.over(
    R.lensPath(R.prop('path', action)), R.not
  )(state),
  [UiActionTypes.SHOW_UI]: (state, action) => R.set(
    R.lensPath(R.prop('path', action)), R.T()
  )(state)
}

const uiReducer = initialState =>
  confirmable(['ui'])(createReducer(initialState, handlers))

export default uiReducer
