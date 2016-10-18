import { expect } from 'chai'
import createReducer from './createReducer'
import { enhanceReducer, deletable, addByNameable} from './itemsReducer'

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

describe('deletable', () => {
  it('should return a reducer that handles DELETE_CATEGORY action', () => {
    const action = {
      type: 'DELETE_CATEGORY',
      payload: {
        id: 1
      }
    }
    const fakeState = {
      items: {
        1: {
          id: 1,
        },
        2: {
          id: 2,
        }
      },
      nextId: 3
    }
    const expected = {
      items: {
        2: {
          id: 2,
        }
      },
      nextId: 3
    }
    const deletableReducer = deletable('CATEGORY')(createReducer({}, {}))
    expect (deletableReducer(fakeState, action)).to.eql(expected)
  })

  it('should let handle other action types by the original reducer', () => {
    const handlers = {
      someActionType: () => 'modified state'
    }
    const handledAction = {
      type: 'someActionType'
    }
    const initialState = 'initialState'
    const deletableReducer = deletable('CATEGORY')(
      createReducer(initialState, handlers)
    )
    expect(deletableReducer(initialState, handledAction))
    .to.equal('modified state')
  })
})

describe('addByNameable', () => {
  it('should return a reducer that handles ADDBYNAME_CATEGORY action', () => {
    const action = {
      type: 'ADDBYNAME_CATEGORY',
      payload: {
        name: 'new'
      }
    }
    const fakeState = {
      items: {
        1: {
          id: 1,
          name: 'old'
        },
        2: {
          id: 2,
          name: 'another one'
        }
      },
      nextId: 3
    }
    const expected = {
      items: {
        1: {
          id: 1,
          name: 'old'
        },
        2: {
          id: 2,
          name: 'another one'
        },
        3: {
          id: 3,
          name: 'new'
        }
      },
      nextId: 4
    }
    const addByNameableReducer = addByNameable('CATEGORY')(createReducer({}, {}))
    expect (addByNameableReducer(fakeState, action)).to.eql(expected)
  })

  it('should return a reducer that handles ADDBYNAME_CATEGORY action, not adding item if name already in state', () => {
    const action = {
      type: 'ADDBYNAME_CATEGORY',
      payload: {
        name: 'old'
      }
    }
    const fakeState = {
      items: {
        1: {
          id: 1,
          name: 'old'
        },
        2: {
          id: 2,
          name: 'another one'
        }
      },
      nextId: 3
    }
    const expected = fakeState
    const addByNameableReducer = addByNameable('CATEGORY')(createReducer({}, {}))
    expect (addByNameableReducer(fakeState, action)).to.eql(expected)
  })

  it('should let handle other action types by the original reducer', () => {
    const handlers = {
      someActionType: () => 'modified state'
    }
    const handledAction = {
      type: 'someActionType'
    }
    const initialState = 'initialState'
    const addByNameableReducer = addByNameable('CATEGORY')(
      createReducer({}, handlers)
    )
    expect(addByNameableReducer(initialState, handledAction))
    .to.equal('modified state')
  })
})
