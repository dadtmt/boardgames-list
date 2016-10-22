import R from 'ramda'
import { expect } from 'chai'
import createReducer,{ curriedReducer } from './createReducer'
import {
  enhanceReducer,
  addable,
  deletable,
  addByNameable,
  linkable,
  isLinked
} from './itemsReducer'

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

describe('addable', () => {
  it('should return a reducer that handles ADD_CATEGORY action', () => {
    const action = {
      type: 'ADD_CATEGORY',
      payload: {
        id: 3
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
        1: {
          id: 1,
        },
        2: {
          id: 2,
        },
        3: {
          id: 3,
        }
      },
      nextId: 4
    }
    const addableReducer = addable('CATEGORY')(createReducer({}, {}))
    expect (addableReducer(fakeState, action)).to.eql(expected)
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

describe('isLinked', () => {
  it('should return true if the item has links with item id and linkedCategory from action payload', () => {
    const fakeState = {
      items: {
        1: {
          id: 1,
          LINKED_CATEGORY: [1]
        },
        2: {
          id: 2,
          LINKED_CATEGORY: []
        },
        3: {
          id: 3
        }
      },
      nextId: 4
    }
    const invalidDeleteAction = {
      type: 'DELETE_CATEGORY',
      payload: {
        id: 1
      }
    }
    const validDeleteAction = {
      type: 'DELETE_CATEGORY',
      payload: {
        id: 2
      }
    }
    const anotherValidDeleteAction = {
      type: 'DELETE_CATEGORY',
      payload: {
        id: 3
      }
    }
    expect(isLinked('LINKED_CATEGORY', invalidDeleteAction)(fakeState))
      .to.be.true
    expect(isLinked('LINKED_CATEGORY', validDeleteAction)(fakeState))
      .to.be.false
    expect(isLinked('LINKED_CATEGORY', anotherValidDeleteAction)(fakeState))
      .to.be.false
  })
})

describe('linkable', () => {
  const invalidDeleteAction = {
    type: 'DELETE_CATEGORY',
    payload: {
      id: 1
    }
  }
  const validDeleteAction = {
    type: 'DELETE_CATEGORY',
    payload: {
      id: 2
    }
  }
  const fakeState = {
    items: {
      1: {
        id: 1,
        LINKED_CATEGORY: [1]
      },
      2: {
        id: 2,
        LINKED_CATEGORY: []
      }
    },
    nextId: 3
  }

  it('should return state with same items and the action in linkError if item has link', () => {
    const expected = {
      items: {
        1: {
          id: 1,
          LINKED_CATEGORY: [1]
        },
        2: {
          id: 2,
          LINKED_CATEGORY: []
        }
      },
      nextId: 3,
      linkError: {
        type: 'DELETE_CATEGORY',
        payload: {
          id: 1
        }
      }
    }
    const linkableReducer = linkable(
      'LINKED_CATEGORY',
      'CATEGORY')(curriedReducer({}, {}))
    expect(linkableReducer(fakeState, invalidDeleteAction)).to.eql(expected)
  })

  it('should return state with same items if item has no link', () => {
    const expected = {
      items: {
        1: {
          id: 1,
          LINKED_CATEGORY: [1]
        },
        2: {
          id: 2,
          LINKED_CATEGORY: []
        }
      },
      nextId: 3
    }
    const linkableReducer = linkable(
      'LINKED_CATEGORY',
      'CATEGORY')(curriedReducer({}, {}))
    expect(linkableReducer(fakeState, validDeleteAction)).to.eql(expected)
  })

  it('should delete item with no link when combined with deletable', () => {
    const expected = {
      items: {
        1: {
          id: 1,
          LINKED_CATEGORY: [1]
        }
      },
      nextId: 3
    }
    const linkableDeletableReducer = R.pipe(
      deletable('CATEGORY'),
      linkable('LINKED_CATEGORY', 'CATEGORY')
    )(curriedReducer({}, {}))
    expect(linkableDeletableReducer(fakeState, validDeleteAction))
      .to.eql(expected)
  })

  it('should clear linkError when a delete action is valid', () => {
    const expected = {
      items: {
        1: {
          id: 1,
          LINKED_CATEGORY: [1]
        }
      },
      nextId: 3
    }
    const linkableDeletableReducer = R.pipe(
      deletable('CATEGORY'),
      linkable('LINKED_CATEGORY', 'CATEGORY')
    )(curriedReducer({}, {}))
    const stateWithLinkError = linkableDeletableReducer(
      fakeState,
      invalidDeleteAction
    )
    expect(linkableDeletableReducer(stateWithLinkError, validDeleteAction))
      .to.eql(expected)
  })

  it('should remove LINKED_CATEGORY item id in CATEGORY links', () => {
    const fakeState = {
      items: {
        1: {
          id: 1,
          LINKED_CATEGORY: [1]
        },
        2: {
          id: 2,
          LINKED_CATEGORY: [1]
        }
      },
      nextId: 3
    }
    const action = {
      type: 'DELETE_LINKED_CATEGORY',
      payload: {
        id: 1
      }
    }
    const expected = {
      items: {
        1: {
          id: 1,
          LINKED_CATEGORY: []
        },
        2: {
          id: 2,
          LINKED_CATEGORY: []
        }
      },
      nextId: 3
    }
    const linkableReducer = linkable(
      'LINKED_CATEGORY',
      'CATEGORY')(curriedReducer({}, {}))
    expect(linkableReducer(fakeState, action)).to.eql(expected)
  })

  it('should add LINKED_CATEGORY item id as link in CATEGORY item when specified in action', () => {
    const action = {
      type: 'ADD_LINKED_CATEGORY',
      links: {
        CATEGORY: [1, 3]
      },
      payload : {
        id: 4
      }
    }
    const fakeState = {
      items: {
        1: {
          id: 1,
          LINKED_CATEGORY: []
        },
        2: {
          id: 2,
          LINKED_CATEGORY: []
        },
        3: {
          id: 3,
          LINKED_CATEGORY: []
        }
      },
      nextId: 3
    }
    const expected = {
      items: {
        1: {
          id: 1,
          LINKED_CATEGORY: [4]
        },
        2: {
          id: 2,
          LINKED_CATEGORY: []
        },
        3: {
          id: 3,
          LINKED_CATEGORY: [4]
        }
      },
      nextId: 3
    }
    const linkableReducer = linkable(
      'LINKED_CATEGORY',
      'CATEGORY')(curriedReducer({}, {}))
    expect(linkableReducer(fakeState, action)).to.eql(expected)
  })
})
