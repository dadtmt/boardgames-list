import R from 'ramda'
import * as ItemActionTypes from '../constants/itemActionTypes'

export const buildActionType = (type, category) =>
  R.pipe(R.flip(R.concat)('_'), R.flip(R.concat)(category))(type)

export const deleteItem = (category, id) => ({
  type: buildActionType(ItemActionTypes.DELETE, category),
  payload: {
    id
  }
})

export const addItemByName = (category, item) => ({
  type: buildActionType(ItemActionTypes.ADDBYNAME, category),
  payload: item
})
