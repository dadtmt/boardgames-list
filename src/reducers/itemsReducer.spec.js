import { expect } from 'chai'
import createReducer from './createReducer'
import { buildActionType, deletable, addByNameable } from './itemsReducer'

describe('buildActionType', () => {
  it('should return TYPE_CATEGORY', () => {
    expect(buildActionType('DELETE', 'CATEGORY')).to.equal('DELETE_CATEGORY')
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
      items: [
        {
          id: 1,
        },
        {
          id: 2,
        }
      ],
      nextId: 3
    }
    const expected = {
      items: [
        {
          id: 2,
        }
      ],
      nextId: 3
    }
    const deletableReducer = deletable(createReducer({}, {}), 'CATEGORY')
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
    const reducer = createReducer(initialState, handlers)
    const deletableReducer = deletable(reducer, 'CATEGORY')
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
      items: [
        {
          id: 1,
          name: 'old'
        },
        {
          id: 2,
          name: 'another one'
        }
      ],
      nextId: 3
    }
    const expected = {
      items: [
        {
          id: 1,
          name: 'old'
        },
        {
          id: 2,
          name: 'another one'
        },
        {
          id: 3,
          name: 'new'
        }
      ],
      nextId: 4
    }
    const addByNameableReducer = addByNameable(createReducer({}, {}), 'CATEGORY')
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
      items: [
        {
          id: 1,
          name: 'old'
        },
        {
          id: 2,
          name: 'another one'
        }
      ],
      nextId: 3
    }
    const expected = fakeState
    const addByNameableReducer = addByNameable(createReducer({}, {}), 'CATEGORY')
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
    const reducer = createReducer(initialState, handlers)
    const addByNameableReducer = addByNameable(reducer, 'CATEGORY')
    expect(addByNameableReducer(initialState, handledAction))
    .to.equal('modified state')
  })
})
