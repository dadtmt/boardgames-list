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
    expect(mapStateToProps(fakeState)).to.eql(expected)
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
    expect(mapStateToProps(fakeState)).to.eql(expected)
  })
})

describe('ConfirmContainer mapDispatchToProps', () => {
  it('should return {onClose: dispatch CLEAR_CONFIRM}', () => {
    const fakeDispatch = (someFunction) => someFunction
    expect(mapDispatchToProps(fakeDispatch).onClose()).to.eql(clearConfirm())
  })
  it('should return {onConfirm: dispatch CLEAR_CONFIRM and the action}', () => {
    const fakeDispatch = sinon.spy()
    const action = { type: 'SOME_ACTION_TYPE'}
    mapDispatchToProps(fakeDispatch).onConfirm(action)
    expect(fakeDispatch.args).to.eql([[clearConfirm()], [action]])
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
    const fakeProps = {
      some: 'prop',
      any: 'prop'
    }
    const expected = {
      ...fakeProps,
      ...mapStateToProps(fakeState),
      ...mapDispatchToProps(fakeDispatch)
    }
    const mergedProps = mergeProps(
      mapStateToProps(fakeState),
      mapDispatchToProps(fakeDispatch),
      fakeProps
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
      [clearConfirm()],
      [clearConfirm()],
      [fakeState.ui.confirm.action]])
  })
})
