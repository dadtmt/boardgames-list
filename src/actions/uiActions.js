import R from 'ramda'
import * as UiActionTypes from '../constants/uiActionTypes'

export const needConfirm = R.pipe(
  R.assoc('payload',R.__, {}),
  R.assoc('type', UiActionTypes.NEED_CONFIRM)
)

export const clearConfirm = () =>
  R.assoc('type', UiActionTypes.CLEAR_CONFIRM, {})
