import R from 'ramda'
import * as ItemActionTypes from '../constants/itemActionTypes'
import { getLinks } from '../reducers/itemsUtils'

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

export const addItemWithLinks = (item, category, links) =>(
  {
    type: buildActionType(ItemActionTypes.ADD, category),
    links: getLinks(links, item),
    payload: item
  }
)
