import R from 'ramda'
import {getActionType} from './itemsUtils'

export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    return R.propOr(
      R.identity,
      getActionType(action),
      handlers
    )(state, action)
  }
}

export const curriedReducer = R.curry(createReducer)
