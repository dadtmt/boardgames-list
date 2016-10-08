import R from 'ramda'

export const getActionType = R.prop('type')

export const getActionPayload = R.prop('payload')

export const getIdFromActionPayload = R.path(['payload', 'id'])

export const lensItems = R.lensProp('items')

export const lensNextId = R.lensProp('nextId')

export const addItemToNextId = R.curry(
  (item, state) => R.pipe(
    R.over(lensItems, R.append(R.assoc('id', R.view(lensNextId, state), item))),
    R.over(lensNextId, R.inc)
  )(state)
)

export const getItemById = (id, state) => R.pipe(
    R.view(lensItems),
    R.find(R.propEq('id', id))
)(state)

export const getItemByName = (name, state) => R.pipe(
  R.view(lensItems),
  R.find(R.propEq('name', name))
)(state)

export const getItemsSortByName = R.pipe(
    R.view(lensItems),
    R.sortBy(R.compose(R.toLower, R.prop('name')))
  )

export const isItemNameNew = R.curry(
  (item, state) => R.isNil(getItemByName(R.prop('name', item), state))
)

export const addItemIfNewName = (item, state) =>
  R.ifElse(
    isItemNameNew(item),
    addItemToNextId(item),
    R.identity
  )(state)

export const deleteItemById = (id, state) =>
  R.over(lensItems, R.without([getItemById(id, state)]))(state)

export const addItemToStateByAction = (state, action) =>
  addItemIfNewName(getActionPayload(action),state)

export const deleteItemFromStateByAction = (state, action) =>
  deleteItemById(getIdFromActionPayload(action), state)
