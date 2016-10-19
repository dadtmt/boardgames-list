import R from 'ramda'
import { buildActionType } from '../actions/itemActions'
import {
  getActionType,
  deleteItemFromStateByAction,
  addItemToStateByAction,
  lensItems
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

export const isLinked = (linkedCategory, action) => R.pipe(
  R.view(
    R.lensPath(
      [
        'items',
        R.path(['payload', 'id'], action),
        linkedCategory
      ]
    )
  ),
  R.allPass([
    R.complement(R.isNil),
    R.complement(R.isEmpty)
  ])
)

export const linkable = R.curry((linkedCategory, category, reducer) =>
  enhanceReducer({
    [buildActionType(ItemsActionTypes.DELETE, category)]:
      (state, action) =>
        R.ifElse(
          isLinked(linkedCategory, action),
          R.assoc('linkError', action),
          R.pipe(
            R.dissoc('linkError'),
            R.flip(reducer)(action)
          )
      )(state),
    [buildActionType(ItemsActionTypes.DELETE, linkedCategory)]:
        (state, action) =>
          R.over(
            lensItems,
            R.map(
              R.over(
                R.lensProp(linkedCategory),
                R.without([R.path(['payload', 'id'], action)])
              )
            )
          )(state)
  })(reducer)
)
