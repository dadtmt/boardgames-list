import R from 'ramda'
import * as UiActionTypes from '../constants/uiActionTypes'
import { prefixTypeByPath } from './utils'

export const needConfirm = path => R.pipe(
  R.assoc('payload',R.__, {}),
  R.assoc(
    'type',
    prefixTypeByPath(UiActionTypes.NEED_CONFIRM)(path)
  )
)

export const clearConfirm = path =>
  R.assoc('type', prefixTypeByPath(UiActionTypes.CLEAR_CONFIRM)(path), {})

export const toggleUi = R.pipe(
  R.assoc('path',R.__, {}),
  R.assoc('type',UiActionTypes.TOGGLE_UI)
)

export const showUi = R.pipe(
  R.assoc('path',R.__, {}),
  R.assoc('type',UiActionTypes.SHOW_UI)
)
