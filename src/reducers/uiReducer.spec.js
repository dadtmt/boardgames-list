import { expect } from 'chai'
import * as UiActionTypes from '../constants/uiActionTypes'
import createReducer from './createReducer'
import uiReducer, { confirmable } from './uiReducer'

describe('confirmable', () => {
  it('should handle NEED_CONFIRM', () => {
    const fakeState = {
      confirm: {}
    }
    const action = {
      type: 'a-path/'+UiActionTypes.NEED_CONFIRM,
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
    const confirmableReducer = confirmable(['a','path'])(createReducer({},{}))
    expect(confirmableReducer(fakeState, action)).to.eql(expected)
  })
  it('should handle NEED_CONFIRM with confirm not specified', () => {
    const fakeState = {}
    const action = {
      type: 'a-path/'+UiActionTypes.NEED_CONFIRM,
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
    const confirmableReducer = confirmable(['a','path'])(createReducer({},{}))
    expect(confirmableReducer(fakeState, action)).to.eql(expected)
  })
  it('should handle CLEAR_CONFIRM', () => {
    const fakeState = {
      confirm: {
        title: 'Please confirm',
        body: 'do you confirm ?',
        action: {type: 'SOME_ACTION_TYPE'}
      }
    }
    const action = {
      type: 'a-path/'+UiActionTypes.CLEAR_CONFIRM,
      payload: {
        title: 'Please confirm',
        body: 'do you confirm ?',
        action: {type: 'SOME_ACTION_TYPE'}
      }
    }
    const expected = {
      confirm: {}
    }
    const confirmableReducer = confirmable(['a','path'])(createReducer({},{}))
    expect(confirmableReducer(fakeState, action)).to.eql(expected)
  })
})

describe('uiReducer', () => {
  it('should handle NEED_CONFIRM action', () => {
    const fakeState = {
      confirm: {}
    }
    const action = {
      type: 'ui/'+UiActionTypes.NEED_CONFIRM,
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
    expect(uiReducer({})(fakeState, action)).to.eql(expected)
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
      type: 'ui/'+UiActionTypes.CLEAR_CONFIRM,
      payload: {
        title: 'Please confirm',
        body: 'do you confirm ?',
        action: {type: 'SOME_ACTION_TYPE'}
      }
    }
    const expected = {
      confirm: {}
    }
    expect(uiReducer({})(fakeState, action)).to.eql(expected)
  })

  it('should handle TOGGLE_UI action', () => {
    const trueState = {
      page: {
        uiToToggle: true
      }
    }
    const falseState = {
      page: {
        uiToToggle: false
      }
    }
    const action = {
      type: 'TOGGLE_UI',
      path: ['page', 'uiToToggle']
    }
    expect(uiReducer({})(trueState, action)).to.eql({
      page: {
        uiToToggle: false
      }
    })
    expect(uiReducer({})(falseState, action)).to.eql({
      page: {
        uiToToggle: true
      }
    })
  })

  it('should handle SHOW_UI action', () => {
    const trueState = {
      page: {
        uiToToggle: true
      }
    }
    const falseState = {
      page: {
        uiToToggle: false
      }
    }
    const action = {
      type: 'SHOW_UI',
      path: ['page', 'uiToToggle']
    }
    expect(uiReducer({})(trueState, action)).to.eql({
      page: {
        uiToToggle: true
      }
    })
    expect(uiReducer({})(falseState, action)).to.eql({
      page: {
        uiToToggle: true
      }
    })
  })
})
