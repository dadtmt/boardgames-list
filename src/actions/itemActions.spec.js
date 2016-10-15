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
