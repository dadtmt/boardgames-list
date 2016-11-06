import R from 'ramda'
import { getActionType } from './itemsUtils'

export const isAppAction = R.pipe(
  R.prop('type'),
  R.anyPass([
    R.contains('@@'),
    R.contains('redux-form')
  ]),
  R.not
)

export const preReducer = R.curry((prepare, reducer) =>
  (state, action) => reducer(
    isAppAction(action) ? prepare(state) : state,
    action
  )
)

export const enhanceReducer = R.curry((handlers, reducer) =>
  (state, action) => R.propOr(
    reducer,
    getActionType(action),
    handlers
  )(state, action))

export const curriedReducer = R.curry(createReducer)

export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    return R.propOr(
      R.identity,
      getActionType(action),
      handlers
    )(state, action)
  }
}
