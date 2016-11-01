import {expect} from 'chai'
import createReducer, { enhanceReducer } from './createReducer'

describe('createReducer', () => {
  const handlers = {
    someActionType: () => 'modified state'
  }
  const handledAction = {
    type: 'someActionType'
  }
  const notHandledAction = {
    type: 'anotherActionType'
  }
  const initialState = 'initialState'
  const reducer = createReducer(initialState, handlers)
  it('should return a reducer handling someActionType', () => {
    expect(reducer(initialState, handledAction)).to.equal('modified state')
  })
  it('should return a reducer that return state for not handled actions', () => {
    expect(reducer(initialState, notHandledAction)).to.equal(initialState)
  })
})

describe('enhanceReducer', () => {
  it('should enhance a reducer with action handlers', () => {
    const handlers = {
      'SOME_ACTION_TYPE': () => 'some state'
    }
    const reducer = createReducer('initial state', {})
    expect(enhanceReducer(handlers)(reducer)('initial state', { type: 'SOME_ACTION_TYPE' }))
      .to.equal('some state')
  })
})
