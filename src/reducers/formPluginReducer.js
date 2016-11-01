import { enhanceReducer } from './createReducer'

export const clearable = triggerType =>
  enhanceReducer({
    [triggerType]: () => undefined
  })
