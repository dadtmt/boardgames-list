import { expect } from 'chai'
import * as ItemActions from './itemActions'

describe('buildActionType', () => {
  it('should return TYPE_CATEGORY', () => {
    expect(ItemActions.buildActionType('DELETE', 'CATEGORY'))
    .to.equal('DELETE_CATEGORY')
  })
})

describe('deleteItem', () => {
  it('should return deleteItem action', () => {
    expect(ItemActions.deleteItem('CATEGORY', 1))
    .to.eql({
      type: 'DELETE_CATEGORY',
      payload: {
        id: 1
      }
    })
  })
})

describe('addItemByName', () => {
  it('should return addItemByName action', () => {
    expect(ItemActions.addItemByName('CATEGORY', {
      name: 'some name'
    }))
    .to.eql({
      type: 'ADDBYNAME_CATEGORY',
      payload: {
        name: 'some name'
      }
    })
  })
})

describe('addItemWithLinks', () => {
  it('should return addItemWithLinks action', () => {
    const item = {
      id: 1,
      LINK1: 2,
      any: {
        1: {
          LINK2: 3,
          some: 'thing'
        },
        2: {
          LINK2: 4,
          some: 'thing'
        }
      }
    }
    const expected = {
      type: 'ADD_CATEGORY',
      links: {
        LINK1: [2],
        LINK2: [3, 4]
      },
      removeLinks: {
        LINK1: [],
        LINK2: []
      },
      payload: item
    }
    expect(ItemActions.addItemWithLinks(
      {}, item, 'CATEGORY', ['LINK1', 'LINK2'])).to.eql(expected)
  })

  it('should return addItemWithLinks action with links to remove and only links to add', () => {
    const oldItem = {
      id: 1,
      LINK1: 2,
      any: {
        1: {
          LINK2: 3,
          some: 'thing'
        },
        2: {
          LINK2: 4,
          some: 'thing'
        }
      }
    }
    const item = {
      id: 1,
      LINK1: 1,
      any: {
        1: {
          LINK2: 2,
          some: 'thing'
        },
        2: {
          LINK2: 4,
          some: 'thing'
        }
      }
    }
    const expected = {
      type: 'ADD_CATEGORY',
      links: {
        LINK1: [1],
        LINK2: [2]
      },
      removeLinks: {
        LINK1: [2],
        LINK2: [3]
      },
      payload: item
    }
    expect(ItemActions.addItemWithLinks(
      oldItem, item, 'CATEGORY', ['LINK1', 'LINK2'])).to.eql(expected)
  })
})

describe('deleteItemWithLinks', () => {
  it('should delete action with links to remove', () => {
    const item = {
      id: 1,
      LINK1: 1,
      any: {
        1: {
          LINK2: 2,
          some: 'thing'
        },
        2: {
          LINK2: 4,
          some: 'thing'
        }
      }
    }
    const expected = {
      type: 'DELETE_CATEGORY',
      removeLinks: {
        LINK1: [1],
        LINK2: [2, 4]
      },
      payload: {
        id: 1
      }
    }
    expect(ItemActions.deleteItemWithLinks(
      item,
      'CATEGORY',
      ['LINK1', 'LINK2']
    )).to.eql(expected)
  })
})
