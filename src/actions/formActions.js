import R from 'ramda'
import * as FormActionTypes from '../constants/formActionTypes'

export const initializeWithConfirm = form => R.pipe(
  R.assoc('values',R.__, {}),
  R.assoc('form', form),
  R.assoc('type',FormActionTypes.INITIALIZE_WITH_CONFIRM)
)
