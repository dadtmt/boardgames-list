import R from 'ramda'
import {expect} from 'chai'
import * as ItemsUtils from './itemsUtils'

const fakeState = {
  items: [
    {
      id: 1,
      name: 'Earth Reborn'
    },
    {
      id: 2,
      name: 'Dungeon Twister'
    }
  ],
  nextId: 3
}

const lensItems = R.lensProp('items')
const lensNextId = R.lensProp('nextId')

const addItemToNextId = R.curry(
  (item, state) => R.pipe(
    R.over(lensItems, R.append(R.assoc('id', R.view(lensNextId, state), item))),
    R.over(lensNextId, R.inc)
  )(state)
)

const getItemByName = (name, state) => R.pipe(
  R.view(lensItems),
  R.find(R.propEq('name', name))
)(state)

const isItemNameNew = R.curry(
  (item, state) => R.isNil(getItemByName(R.prop('name', item), state))
)

const addItemIfNewName = (item, state) =>
  R.ifElse(
    isItemNameNew(item),
    addItemToNextId(item),
    R.identity
  )(state)

describe('isItemNameNew', () => {
  it.only('should return true if an item name in not in state', () => {
    const itemWithNewName = {
      name: 'Blood Bowl'
    }
    const itemWithExistingName = {
      name: 'Dungeon Twister'
    }
    
    expect(isItemNameNew(itemWithNewName, fakeState)).to.be.true
    expect(isItemNameNew(itemWithExistingName, fakeState)).to.be.false
  })
})

describe('getItemByName', () => {
  it.only('should return item with name or undefined if not found', () => {
    const expected = {
      id: 1,
      name: 'Earth Reborn'
    }
    expect(getItemByName('Earth Reborn', fakeState)).eql(expected)
    expect(getItemByName('some name', fakeState)).equal(undefined)
  })
})


describe('addItemIfNewName', ()=>{
  it.only('should add the item only if there is no item with the same name', () => {
    const item = {
      name: 'Blood Bowl'
    }
    const badItem = {
      name: 'Dungeon Twister'
    }
    const expected = {
      items: [
        {
          id: 1,
          name: 'Earth Reborn'
        },
        {
          id: 2,
          name: 'Dungeon Twister'
        },
        {
          id: 3,
          name: 'Blood Bowl'
        }
      ],
      nextId: 4
    }
    expect(addItemIfNewName(item, fakeState)).eql(expected)
    expect(addItemIfNewName(badItem, fakeState)).equal(fakeState)
  })
})


describe('addItemToNextId', ()=>{
  it.only('should add item to items and setting item id to next id and increments item', () => {
    const item = {
      name: 'Blood Bowl'
    }
    const expected = {
      items: [
        {
          id: 1,
          name: 'Earth Reborn'
        },
        {
          id: 2,
          name: 'Dungeon Twister'
        },
        {
          id: 3,
          name: 'Blood Bowl'
        }
      ],
      nextId: 4
    }
    expect(addItemToNextId(item, fakeState)).eql(expected)
  })
})

describe('lensItems', ()=>{
  it.only('should return items array when used with view', () => {
    const expected = [
      {
        id: 1,
        name: 'Earth Reborn'
      },
      {
        id: 2,
        name: 'Dungeon Twister'
      }
    ]
    expect(R.view(lensItems, fakeState)).eql(expected)
  })
})

describe('lensNextId', ()=>{
  it.only('should return nextId', () => {
    const expected = 3
    expect(R.view(lensNextId, fakeState)).eql(expected)
  })
})

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

describe('convertItemsObjectToArray', () => {
  it('should return an array containing all items', () => {
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
    const expected = [
      {
        name: 'Dungeon Twister',
        id: 1
      },
      {
        name: 'Earth Reborn',
        id: 2
      }
    ]
    expect(ItemsUtils.convertItemsObjectToArray(fakeState)).to.eql(expected)
  })
})


describe('findByItemName', () => {
  it('should return item with this name', () => {
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
      name: 'Earth Reborn',
      id: 2
    }
    expect(ItemsUtils.findByItemName('Earth Reborn', fakeState)).to.eql(expected)
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

  it('should not add an item wich name is already given to another item', () => {
    const item = {
      name: 'Dungeon Twister'
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
    expect(ItemsUtils.addItemToNextIdAndIncNextId(item, fakeState)).to.eql(fakeState)
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
