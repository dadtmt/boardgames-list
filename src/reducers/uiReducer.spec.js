import { expect } from 'chai'
import * as UiActionTypes from '../constants/uiActionTypes'
import uiReducer from './uiReducer'

describe('uiReducer', () => {
  it('should handle NEED_CONFIRM action', () => {
    const fakeState = {
      confirm: {}
    }
    const action = {
      type: UiActionTypes.NEED_CONFIRM,
      payload: {
        title: 'Please confirm',
        body: 'do you confirm ?',
        action: {type: 'SOME_ACTION_TYPE'}
      }
    }
    const expected = {
      confirm: {
        title: 'Please confirm',
        body: 'do you confirm ?',
        action: {type: 'SOME_ACTION_TYPE'}
      }
    }
    expect(uiReducer(fakeState, action)).to.eql(expected)
  })

  it('should handle CLEAR_CONFIRM action', () => {
    const fakeState = {
      confirm: {
        title: 'Please confirm',
        body: 'do you confirm ?',
        action: {type: 'SOME_ACTION_TYPE'}
      }
    }
    const action = {
      type: UiActionTypes.CLEAR_CONFIRM,
      payload: {
        title: 'Please confirm',
        body: 'do you confirm ?',
        action: {type: 'SOME_ACTION_TYPE'}
      }
    }
    const expected = {
      confirm: {}
    }
    expect(uiReducer(fakeState, action)).to.eql(expected)
  })
})
