import { expect } from 'chai'
import createReducer from './createReducer'
import { clearable } from './formPluginReducer'

describe('clearable', () => {
  it('should returns undefined as it clears a form', () => {
    const fakeState = 'initialState'
    const triggerAction = {
      type: 'TRIGGER_CLEAR'
    }
    const clearableReducer = clearable('TRIGGER_CLEAR')(createReducer({}, {}))
    expect(clearableReducer(fakeState, triggerAction))
    .to.be.not.defined
    expect(clearableReducer(fakeState, {type: 'SOME_TYPE'}))
    .to.eql(fakeState)
  })
})
