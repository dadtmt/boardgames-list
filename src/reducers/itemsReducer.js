import R from 'ramda'
import { buildActionType } from '../actions/itemActions'
import {
  getActionType,
  deleteItemFromStateByAction,
  addItemToStateByAction
} from './itemsUtils'
import * as ItemsActionTypes from '../constants/itemActionTypes'

export const enhanceReducer = R.curry((handlers, reducer) =>
  (state, action) => R.propOr(
    reducer,
    getActionType(action),
    handlers
  )(state, action))

export const deletable  = (category) =>
  enhanceReducer({
    [buildActionType(ItemsActionTypes.DELETE, category)]:
      deleteItemFromStateByAction
  })

export const addByNameable  = (category)  =>
  enhanceReducer({
    [buildActionType(ItemsActionTypes.ADDBYNAME, category)]:
      addItemToStateByAction
  })
