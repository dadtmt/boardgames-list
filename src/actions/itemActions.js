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

export const addItemWithLinks = (oldItem, item, category, links) => {
  const oldItemLinks = getLinks(links, oldItem)
  const itemLinks = getLinks(links, item)
  return {
    type: buildActionType(ItemActionTypes.ADD, category),
    links: R.mergeWith(R.without, oldItemLinks, itemLinks),
    removeLinks: R.mergeWith(R.without, itemLinks, oldItemLinks),
    payload: item
  }
}

export const deleteItemWithLinks = (item, category, links) => ({
  type: buildActionType(ItemActionTypes.DELETE, category),
  removeLinks: getLinks(links, item),
  payload: {
    id : R.prop('id', item)
  }
})
