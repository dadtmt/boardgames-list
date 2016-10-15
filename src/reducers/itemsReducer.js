import R from 'ramda'
import { buildActionType } from '../actions/itemActions'
import {
  getActionType,
  deleteItemFromStateByAction,
  addItemToStateByAction
} from './itemsUtils'
import * as ItemsActionTypes from '../constants/itemActionTypes'

export function deletable (reducer, category) {
  const handlers = {
    [buildActionType(ItemsActionTypes.DELETE, category)]:
      deleteItemFromStateByAction
  }
  return function (state, action) {
    return R.propOr(
      reducer,
      getActionType(action),
      handlers
    )(state, action)
  }
}

export function addByNameable (reducer, category) {
  const handlers = {
    [buildActionType(ItemsActionTypes.ADDBYNAME, category)]:
      addItemToStateByAction
  }
  return function (state, action) {
    return R.propOr(
      reducer,
      getActionType(action),
      handlers
    )(state, action)
  }
}
