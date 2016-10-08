import { expect } from 'chai'
import { createStore } from 'redux'
import initialState from '../reducers/initialState'
import rootReducer from '../reducers'

describe('Store', () =>
  it('should should be initialState', () => {
    const store = createStore(rootReducer, initialState)
    const expected = store
    expect(store).to.deep.equal(expected)
  })
)
