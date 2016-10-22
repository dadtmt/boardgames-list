import R from 'ramda'

export const getActionType = R.prop('type')

export const getActionPayload = R.prop('payload')

export const getIdFromActionPayload = R.path(['payload', 'id'])

export const lensItems = R.lensProp('items')

export const lensItem = id => R.lensPath(['items', id])

export const lensItemLinksForCategory = (id, linkedCategory) =>
  R.lensPath(['items', id, linkedCategory])

export const lensNextId = R.lensProp('nextId')

export const addItemToNextId = R.curry(
  (item, state) => R.pipe(
    R.over(lensItems, R.assoc(
      R.view(lensNextId, state),
      R.assoc('id', R.view(lensNextId, state), item))
    ),
    R.over(lensNextId, R.inc)
  )(state)
)

export const getItemById = id => R.view(lensItem(id))

export const getItemByName = name => R.pipe(
  R.view(lensItems),
  R.pickBy(R.propEq('name', name)),
  R.values,
  R.head
)

export const getItemsSortByName = R.pipe(
  R.view(lensItems),
  R.values,
  R.sortBy(R.compose(R.toLower, R.prop('name')))
)

export const isNameNew = name =>  R.pipe(
  getItemByName(name),
  R.isNil
)

// check if some tests are still useful when using flow
export const isItemNameValid = item =>
  R.pipe(
    isNameNew (R.prop('name', item)),
    R.and(
      R.allPass(
        [
          R.complement(R.isNil),
          R.complement(R.isEmpty),
          R.is(String)
        ]
      )(R.prop('name', item))
    )
  )

export const addItemIfValid = item =>
  R.ifElse(
    isItemNameValid(item),
    addItemToNextId(item),
    R.identity
  )

export const deleteItemById = id => R.over(lensItems, R.dissoc(String(id)))

export const nestedObjectToPairs = obj_ => R.chain(([k, v]) => {
  if (typeof v == 'object') {
    return R.map(([k_, v_]) => [`${k}.${k_}`, v_], nestedObjectToPairs(v))
  } else {
    return [[k, v]]
  }
}, R.toPairs(obj_))

export const getLinks = (links, item) => {
  const result = R.pipe(
    R.invertObj,
    R.map(R.always([]))
  )(links)
  const storeLinkIds = (acc, value) => {
    R.forEach(
      link => {
        if(R.head(value).indexOf(link) != -1) {
          acc = R.over(R.lensProp(link),R.flip(R.concat)(R.tail(value)), acc)
        }
      }
    )(links)
    return acc
  }
  return R.reduce(storeLinkIds, result, nestedObjectToPairs(item))
}

export const addItemToStateByAction = (state, action) =>
  addItemIfValid(getActionPayload(action))(state)

export const deleteItemFromStateByAction = (state, action) =>
  deleteItemById(getIdFromActionPayload(action))(state)
