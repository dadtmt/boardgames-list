import R from 'ramda';

export const getActionType = R.prop('type');

export const getActionPayload = R.prop('payload');

export const getIdFromActionPayload = R.pipe(getActionPayload, R.prop('id'));

export const getIdAsStringFromActionPayload = R.pipe(
  getIdFromActionPayload,
   String
 );

export const deleteItemFromStateByAction = (state, action) => (
  R.omit(getIdAsStringFromActionPayload(action), state)
);
