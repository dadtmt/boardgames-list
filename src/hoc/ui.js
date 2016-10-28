import R from 'ramda'

export const addUi = (ui) => R.ifElse(
  R.pipe(
    R.prop('uis'),
    R.isNil
  ),
  R.assoc('uis',[ui]),
  R.evolve({uis: R.append(ui)})
)
