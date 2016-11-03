import R from 'ramda'
import { initialize } from 'redux-form'
import { enhanceReducer } from './createReducer'

export const clearable = triggerType => enhanceReducer({
  [triggerType]: () => undefined
})

export const initializable = enhanceReducer(
  {
    INITIALIZE_WITH_CONFIRM: (state, action) => R.ifElse(
      R.converge(
        R.equals,
        [
          R.prop('initial'),
          R.prop('values')
        ]
      ),
      R.pipe(
        R.assoc('initial', R.prop('values', action)),
        R.assoc('values', R.prop('values', action))
      ),
      R.set(R.lensProp('confirm'), {
        title: 'Not saved mofifications',
        body: 'Some modifications will not be saved, confirm ?',
        action: initialize(
          R.prop('form', action),
          R.prop('values', action)
        )
      })
    )(state)
  }
)
