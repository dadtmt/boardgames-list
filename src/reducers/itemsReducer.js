import R from 'ramda'
import { enhanceReducer, preReducer } from './createReducer'
import { buildActionType } from '../actions/itemActions'
import {
  deleteItemFromStateByAction,
  addItemToStateByAction,
  addItemByNameToStateByAction,
  lensItems
} from './itemsUtils'
import * as ItemsActionTypes from '../constants/itemActionTypes'

export const addable = category =>
enhanceReducer({
  [buildActionType(ItemsActionTypes.ADD, category)]:
    addItemToStateByAction
})

export const deletable  = (category) =>
  enhanceReducer({
    [buildActionType(ItemsActionTypes.DELETE, category)]:
      deleteItemFromStateByAction
  })

export const addByNameable  = (category)  =>
  enhanceReducer({
    [buildActionType(ItemsActionTypes.ADDBYNAME, category)]:
      addItemByNameToStateByAction
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

export const addLinks = (linkedCategory, category, action) => R.pipe(
  R.pick(R.path(['links', category], action)),
  R.map(
    R.pipe(
      R.when(
        R.pipe(
          R.prop(linkedCategory),
          R.isNil
        ),
        R.assoc(linkedCategory, [])
      ),
      R.evolve({
        [linkedCategory]: R.flip(R.concat)(
          [R.path(['payload', 'id'], action)]
        )
      })
    )
  )
)

export const removeLinks = (linkedCategory, category, action) => R.pipe(
  R.pick(R.path(['removeLinks', category], action)),
  R.map(
    R.pipe(
      R.evolve({
        [linkedCategory]: R.without(
          [R.path(['payload', 'id'], action)]
        )
      })
    )
  )
)

//LinkError must be somewhere else or handled by a reducer/middleware

export const linkable = R.curry((linkedCategory, category, reducer) =>
  R.compose(
    preReducer(R.dissoc('linkError')),
    enhanceReducer({
      [buildActionType(ItemsActionTypes.DELETE, category)]:
        (state, action) =>
          R.ifElse(
            isLinked(linkedCategory, action),
            R.assoc('linkError', action),
            R.flip(reducer)(action)
        )(state),
      [buildActionType(ItemsActionTypes.DELETE, linkedCategory)]:
          (state, action) =>
            R.over(
              lensItems,
              R.pipe(
                removeLinks(linkedCategory, category, action),
                R.merge(
                  R.view(R.lensProp('items'))(state)
                )
              )
            )(state),
      [buildActionType(ItemsActionTypes.ADD, linkedCategory)]:
          (state, action) =>
          R.over(
            R.lensProp('items'),
            R.pipe(
              R.converge(
                R.merge,
                [
                  addLinks(linkedCategory, category, action),
                  removeLinks(linkedCategory, category, action)
                ]
              ),
            R.merge(
              R.view(R.lensProp('items'))(state)
            )
          )
        )(state)
    }))(reducer)
)
