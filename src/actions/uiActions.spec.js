import { expect } from 'chai'
import * as UiActions from './uiActions'

describe('needConfirm',() => {
  it('should return needConfirm action', () => {
    const action = {
      type: 'SOME_ACTION'
    }
    const title = 'please confirm'
    const body = 'do you confirm ?'
    const expected = {
      type: 'NEED_CONFIRM',
      payload: {
        title,
        body,
        action
      }
    }
    expect(UiActions.needConfirm({
      title,
      body,
      action
    })).to.eql(expected)
  })
})

describe('clearConfirm', () => {
  it('should return clearConfirm action', () => {
    const expected = {
      type: 'CLEAR_CONFIRM'
    }
    expect(UiActions.clearConfirm()).to.eql(expected)
  })
})
