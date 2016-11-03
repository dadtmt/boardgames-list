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
      type: 'path-to-ui/NEED_CONFIRM',
      payload: {
        title,
        body,
        action
      }
    }
    expect(UiActions.needConfirm(['path', 'to', 'ui'])(
      {
        title,
        body,
        action
      }
    )).to.eql(expected)
  })
})

describe('clearConfirm', () => {
  it('should return clearConfirm action', () => {
    const expected = {
      type: 'path-to-ui/CLEAR_CONFIRM'
    }
    expect(UiActions.clearConfirm(['path', 'to', 'ui'])).to.eql(expected)
  })
})

describe('toggleUi', () => {
  it('should toggle a ui describe by path', () => {
    const expected = {
      type: 'TOGGLE_UI',
      path: ['page', 'ui']
    }
    expect(UiActions.toggleUi(['page', 'ui'])).to.eql(expected)
  })
})

describe('showUi', () => {
  it('should show a ui describe by path', () => {
    const expected = {
      type: 'SHOW_UI',
      path: ['page', 'ui']
    }
    expect(UiActions.showUi(['page', 'ui'])).to.eql(expected)
  })
})
