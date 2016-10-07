import {expect} from 'chai'
import * as ItemsUtils from './itemsUtils'

describe('getActionType', () => {
  it('should return action.type', () => {
    const action = { type: 'ACTION_TYPE' }
    const expected = 'ACTION_TYPE'
    expect(ItemsUtils.getActionType(action)).eql(expected)
  })
})

describe('getActionPayload', () => {
  it('should return action.payload', () => {
    const action = { payload: {
      id: 1,
      name: 'some name'
    }}
    const expected = {
      id: 1,
      name: 'some name'
    }

    expect(ItemsUtils.getActionPayload(action)).eql(expected)
  })
})

describe('getIdFromActionPayload', () => {
  it('should return action.payload.id', () => {
    const action = { payload: {
      id: 1,
      name: 'some name'
    }}
    const expected = 1

    expect(ItemsUtils.getIdFromActionPayload(action)).eql(expected)
  })
})

describe('getIdAsStringFromActionPayload', () => {
  it('should return action.payload.id as string', () => {
    const action = { payload: {
      id: 1,
      name: 'some name'
    }}
    const expected = '1'

    expect(ItemsUtils.getIdAsStringFromActionPayload(action)).eql(expected)
  })
})

describe('getNextId', () => {
  it('should return nextId', () => {
    const fakeState = {
      1: {
        name: 'Dungeon Twister'
      },
      2: {
        name: 'Earth Reborn'
      },
      nextId: 3
    }
    expect(ItemsUtils.getNextId(fakeState)).to.equal(3)
  })
})

describe('setNextId', () => {
  it('should set nextId prop', () => {
    const fakeState = {
      nextId:4
    }
    const expected = {
      nextId:10
    }
    expect(ItemsUtils.setNextId(10, fakeState)).to.eql(expected)
  })
})

describe('incNextId', () => {
  it('should increments nextId prop', () => {
    const fakeState = {
      1: {
        name: 'Dungeon Twister'
      },
      nextId:4
    }
    const expected = {
      1: {
        name: 'Dungeon Twister'
      },
      nextId:5
    }
    expect(ItemsUtils.incNextId(fakeState)).to.eql(expected)
  })
})

describe('addItemById', () => {
  it('should add an item to id and set the item id', () => {
    const item = {
      name: 'Blood Bowl'
    }
    const fakeState = {
      1: {
        name: 'Dungeon Twister',
        id: 1
      },
      2: {
        name: 'Earth Reborn',
        id: 2
      }
    }
    const expected = {
      1: {
        name: 'Dungeon Twister',
        id: 1
      },
      2: {
        name: 'Earth Reborn',
        id: 2
      },
      3: {
        name: 'Blood Bowl',
        id: 3
      }
    }
    expect(ItemsUtils.addItemById(3, item, fakeState)).to.eql(expected)
  })
})

describe('addItemToNextIdAndIncNextId', () => {
  it('should add an item with nextId key and increments nextId', () => {
    const item = {
      name: 'Blood Bowl'
    }
    const fakeState = {
      1: {
        name: 'Dungeon Twister',
        id: 1
      },
      2: {
        name: 'Earth Reborn',
        id: 2
      },
      nextId: 3
    }
    const expected = {
      1: {
        name: 'Dungeon Twister',
        id: 1
      },
      2: {
        name: 'Earth Reborn',
        id: 2
      },
      3: {
        name: 'Blood Bowl',
        id: 3
      },
      nextId: 4
    }
    expect(ItemsUtils.addItemToNextIdAndIncNextId(item, fakeState)).to.eql(expected)
  })
})

describe('addItemToStateByAction', () => {
  it('should add action.payload as item with id: nextId and increments nextId', () => {
    const action = { payload: {
      name: 'Blood Bowl'
    }}
    const fakeState = {
      1: {
        name: 'Dungeon Twister',
        id: 1
      },
      2: {
        name: 'Earth Reborn',
        id: 2
      },
      nextId: 3
    }
    const expected = {
      1: {
        name: 'Dungeon Twister',
        id: 1
      },
      2: {
        name: 'Earth Reborn',
        id: 2
      },
      3: {
        name: 'Blood Bowl',
        id: 3
      },
      nextId: 4
    }
    expect(ItemsUtils.addItemToStateByAction(fakeState, action)).eql(expected)
  })
})


describe('deleteItemFromStateByAction', () => {
  it('should delete item with action.payload.id', () => {
    const action = { payload: {
      id: 1
    }}
    const fakeState = {
      1: {
        name: 'Dungeon Twister'
      },
      2: {
        name: 'Earth Reborn'
      }
    }
    const expected = {
      2: {
        name: 'Earth Reborn'
      }
    }

    expect(ItemsUtils.deleteItemFromStateByAction(fakeState, action))
    .eql(expected)
  })
})
