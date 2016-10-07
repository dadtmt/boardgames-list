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
