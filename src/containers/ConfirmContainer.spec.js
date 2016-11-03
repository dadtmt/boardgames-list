import R from 'ramda'
import {expect} from 'chai'
import sinon from 'sinon'
import {
   mapStateToProps,
   mapDispatchToProps,
   mergeProps
 } from './ConfirmContainer'
import { clearConfirm } from '../actions/uiActions'

describe('ConfirmContainer mapStateToProps', () => {
  it('should return {title, body, show, action} if confirm not empty in state', () => {
    const fakeState = {
      ui: {
        confirm: {
          title: 'Please confirm',
          body: 'do you confirm ?',
          action: {type: 'SOME_ACTION_TYPE'}
        }
      }
    }
    const expected = {
      title: 'Please confirm',
      body: 'do you confirm ?',
      action: {type: 'SOME_ACTION_TYPE'},
      show: true
    }
    expect(mapStateToProps(fakeState, { path: ['ui'] })).to.eql(expected)
  })
  it('should return {title, body, show, action} empty if confirm empty in state', () => {
    const fakeState = {
      ui: {
        confirm: {}
      }
    }
    const expected = {
      title: '',
      body: '',
      action: {},
      show: false
    }
    expect(mapStateToProps(fakeState, { path: ['ui'] })).to.eql(expected)
  })
  it('should return {title, body, show, action} empty if confirm not in state', () => {
    const fakeState = {
      ui: {}
    }
    const expected = {
      title: '',
      body: '',
      action: {},
      show: false
    }
    expect(mapStateToProps(fakeState, { path: ['ui'] })).to.eql(expected)
  })
})

describe('ConfirmContainer mapDispatchToProps', () => {
  it('should return {onClose: dispatch CLEAR_CONFIRM}', () => {
    const fakeDispatch = (someFunction) => someFunction
    expect(mapDispatchToProps(fakeDispatch, { path: ['ui'] }).onClose())
    .to.eql(clearConfirm(['ui']))
  })
  it('should return {onConfirm: dispatch CLEAR_CONFIRM and the action}', () => {
    const fakeDispatch = sinon.spy()
    const action = { type: 'SOME_ACTION_TYPE'}
    mapDispatchToProps(fakeDispatch, { path: ['ui'] }).onConfirm(action)
    expect(fakeDispatch.args).to.eql([[clearConfirm(['ui'])], [action]])
  })
})

describe('ConfirmContainer mergeProps', () => {
  it('should return props merge with onConfirm() => onConfirm(action)', () => {
    const fakeDispatch = sinon.spy()
    const fakeState = {
      ui: {
        confirm: {
          title: 'Please confirm',
          body: 'do you confirm ?',
          action: {type: 'SOME_ACTION_TYPE'}
        }
      }
    }
    const expected = {
      path: ['ui'],
      ...mapStateToProps(fakeState, { path: ['ui'] }),
      ...mapDispatchToProps(fakeDispatch, { path: ['ui'] })
    }
    const mergedProps = mergeProps(
      mapStateToProps(fakeState, { path: ['ui'] }),
      mapDispatchToProps(fakeDispatch, { path: ['ui'] }),
      { path: ['ui'] }
    )
    expect(
      R.omit(
        ['onConfirm', 'onClose'],
        mergedProps
      )
    ).to.eql(R.omit(['onConfirm', 'onClose'], expected))
    mergedProps.onClose()
    mergedProps.onConfirm()
    expect(fakeDispatch.args).to.eql([
      [clearConfirm(['ui'])],
      [clearConfirm(['ui'])],
      [fakeState.ui.confirm.action]])
  })
})
