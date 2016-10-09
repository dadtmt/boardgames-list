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

describe('lensItems', ()=>{
  it('should return items array when used with view', () => {
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
    expect(R.view(ItemsUtils.lensItems, fakeState)).eql(expected)
  })
})

describe('lensNextId', ()=>{
  it('should return nextId', () => {
    const expected = 3
    expect(R.view(ItemsUtils.lensNextId, fakeState)).eql(expected)
  })
})

describe('addItemToNextId', ()=>{
  it('should add item to items and setting item id to next id and increments item', () => {
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
    expect(ItemsUtils.addItemToNextId(item, fakeState)).eql(expected)
  })
})

describe('getItemById', () => {
  it('should return item with id or undefined if not found', () => {
    const expected = {
      id: 1,
      name: 'Earth Reborn'
    }
    expect(ItemsUtils.getItemById(1, fakeState)).eql(expected)
    expect(ItemsUtils.getItemById(5, fakeState)).equal(undefined)
  })
})

describe('getItemByName', () => {
  it('should return item with name or undefined if not found or if name is undefined', () => {
    const expected = {
      id: 1,
      name: 'Earth Reborn'
    }
    expect(ItemsUtils.getItemByName('Earth Reborn', fakeState)).eql(expected)
    expect(ItemsUtils.getItemByName('some name', fakeState)).equal(undefined)
  })
})

describe('getItemsSortByName', () => {
  it('should return items sorted by name', () => {
    const expected = [
      {
        id: 2,
        name: 'Dungeon Twister'
      },
      {
        id: 1,
        name: 'Earth Reborn'
      }
    ]
    expect(ItemsUtils.getItemsSortByName(fakeState)).to.eql(expected)
  })
})

describe('isNameNew', () => {
  it('should return true if a name in not in state', () => {
    const name = 'Blood Bowl'
    expect(ItemsUtils.isNameNew(name, fakeState)).to.be.true
  })
  it('should return false if a name is in state', () => {
    const name = 'Dungeon Twister'
    expect(ItemsUtils.isNameNew(name, fakeState)).to.be.false
  })
})

describe('isItemNameValid', () => {
  it('should return true if an item name in not in state', () => {
    const item = {
      name: 'Blood Bowl'
    }
    expect(ItemsUtils.isItemNameValid(item, fakeState)).to.be.true
  })
  it('should return false if an item name is in state', () => {
    const item = {
      name: 'Dungeon Twister'
    }
    expect(ItemsUtils.isItemNameValid(item, fakeState)).to.be.false
  })
  it('should return false if item has no name', () => {
    const item = {
      id:5
    }
    expect(ItemsUtils.isItemNameValid(item, fakeState)).to.be.false
  })
  it('should return false if item name is not a string', () => {
    const item = {
      name: {
        foo: 'bar'
      }
    }
    expect(ItemsUtils.isItemNameValid(item, fakeState)).to.be.false
  })
  it('should return false if item name is undefined', () => {
    const item = {
      name: undefined
    }
    expect(ItemsUtils.isItemNameValid(item, fakeState)).to.be.false
  })
  it('should return false if item name is empty', () => {
    const item = {
      name: ''
    }
    expect(ItemsUtils.isItemNameValid(item, fakeState)).to.be.false
  })
})

describe('addItemIfValid', ()=>{

  it('should add the item', () => {
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
    expect(ItemsUtils.addItemIfValid(item, fakeState)).eql(expected)
  })

  it('should no add the item only if there is no item with the same name', () => {
    const item = {
      name: 'Dungeon Twister'
    }
    expect(ItemsUtils.addItemIfValid(item, fakeState)).equal(fakeState)
  })

  it('should add the item only if prop name exist', () => {
    const item = {
      id:5
    }
    expect(ItemsUtils.addItemIfValid(item, fakeState)).equal(fakeState)
  })

  it('should add the item only if prop name is not empty', () => {
    const item = {
      name: ''
    }
    expect(ItemsUtils.addItemIfValid(item, fakeState)).equal(fakeState)
  })

  it('should add the item only if prop name is a string', () => {
    const item = {
      name: {foo: 'bar'}
    }
    expect(ItemsUtils.addItemIfValid(item, fakeState)).equal(fakeState)
  })
})

describe('deleteItemById', () => {
  it('should delete item with specified id or do nothing if there is no item with id', () => {
    const validId = 1
    const invalidId = 5
    const expected = {
      items: [
        {
          id: 2,
          name: 'Dungeon Twister'
        }
      ],
      nextId: 3
    }
    expect(ItemsUtils.deleteItemById(validId, fakeState)).to.eql(expected)
    expect(ItemsUtils.deleteItemById(invalidId, fakeState)).to.eql(fakeState)
  })
})

describe('addItemToStateByAction', () => {
  it('should add action.payload as item with id: nextId and increments nextId', () => {
    const actionWithNewName = {
      payload: {
        name: 'Blood Bowl'
      }
    }
    const actionWithExistingName = {
      payload: {
        name: 'Dungeon Twister'
      }
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
    expect(ItemsUtils.addItemToStateByAction(fakeState, actionWithNewName))
    .eql(expected)
    expect(ItemsUtils.addItemToStateByAction(fakeState, actionWithExistingName))
    .eql(fakeState)
  })
})


describe('deleteItemFromStateByAction', () => {
  it('should delete item with action.payload.id and do nothing if id not exist', () => {
    const actionWithValidId = {
      payload: {
        id: 1
      }
    }
    const actionWithInvalidId = {
      payload: {
        id: 10
      }
    }
    const expected = {
      items: [
        {
          id: 2,
          name: 'Dungeon Twister'
        }
      ],
      nextId: 3
    }
    expect(ItemsUtils.deleteItemFromStateByAction(fakeState, actionWithValidId))
    .eql(expected)
    expect(ItemsUtils.deleteItemFromStateByAction(fakeState, actionWithInvalidId))
    .eql(fakeState)
  })
})
