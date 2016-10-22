import R from 'ramda'
import { addItemWithLinks } from './itemActions'

export const createAddAction = (
  category,
  links,
  nextIdSelector,
  item
) =>
  (dispatch, getState) => {
    dispatch(
      addItemWithLinks(
        R.assoc('id', nextIdSelector(getState()), item),
        category,
        links
      )
    )
  }
