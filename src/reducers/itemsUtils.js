import R from 'ramda'

export const getActionType = R.prop('type')

export const getActionPayload = R.prop('payload')

export const getIdFromActionPayload = R.pipe(getActionPayload, R.prop('id'))

export const getIdAsStringFromActionPayload = R.pipe(
  getIdFromActionPayload,
  String
)

export const getNextId = R.prop('nextId')

export const setNextId = (nextId, state) => R.assoc('nextId', nextId, state)

export const incNextId = (state) => setNextId(R.inc(getNextId(state)), state)

export const addItemById = (id, item, state) =>
  R.assoc(id, R.assoc('id', id, item), state)

export const convertItemsObjectToArray = (state) =>
  R.map(R.prop(R.__, state), R.keys(R.filter(R.has('id'), state)))

export const findByItemName = (name, state) =>
  R.find(R.propEq('name', name), convertItemsObjectToArray(state))

export const addItemToNextIdAndIncNextId = (item, state) =>
// should read about ramda lenses, decorators
  R.ifElse(
    R.isNil(findByItemName(R.prop('name',item),state)),
    state,
    incNextId(addItemById(getNextId(state), item, state))
  )

export const addItemToStateByAction = (state, action) =>
  addItemToNextIdAndIncNextId(getActionPayload(action),state)

export const deleteItemFromStateByAction = (state, action) =>
  R.omit(getIdAsStringFromActionPayload(action), state)
