import R from 'ramda'
import * as UiActionTypes from '../constants/uiActionTypes'

export const needConfirm = R.pipe(
  R.assoc('payload',R.__, {}),
  R.assoc('type', UiActionTypes.NEED_CONFIRM)
)

export const clearConfirm = () =>
  R.assoc('type', UiActionTypes.CLEAR_CONFIRM, {})

export const toggleUi = R.pipe(
  R.assoc('path',R.__, {}),
  R.assoc('type',UiActionTypes.TOGGLE_UI)
)

export const showUi = R.pipe(
  R.assoc('path',R.__, {}),
  R.assoc('type',UiActionTypes.SHOW_UI)
)
