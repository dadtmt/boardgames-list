import { expect } from 'chai'
import { initialize } from 'redux-form'
import createReducer from './createReducer'
import { clearable, initializable } from './formPluginReducer'

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



describe('initializable', () => {
  it('should initialize if initial = value', () => {
    const fakeState={
      initial: {
        some: 'thing'
      },
      values: {
        some: 'thing'
      }
    }
    const expected = {
      initial: {
        some: 'thing new'
      },
      values: {
        some: 'thing new'
      }
    }
    const action = {
      type: 'INITIALIZE_WITH_CONFIRM',
      form: 'formName',
      values: {
        some: 'thing new'
      }
    }
    const initializableReducer = initializable(createReducer({}, {}))
    expect(initializableReducer(fakeState, action)).to.eql(expected)
  })
  it('should set confirmInitialize if initial != value', () => {
    const fakeState={
      initial: {
        some: 'thing'
      },
      values: {
        some: 'thing modified'
      }
    }
    const expected = {
      initial: {
        some: 'thing'
      },
      values: {
        some: 'thing modified'
      },
      confirm: {
        title: 'Not saved mofifications',
        body: 'Some modifications will not be saved, confirm ?',
        action: initialize(
          'formName',
          {
            some: 'thing new'
          }
        )
      }
    }
    const action = {
      type: 'INITIALIZE_WITH_CONFIRM',
      form: 'formName',
      values: {
        some: 'thing new'
      }
    }
    const initializableReducer = initializable(createReducer({}, {}))
    expect(initializableReducer(fakeState, action)).to.eql(expected)
  })
})
