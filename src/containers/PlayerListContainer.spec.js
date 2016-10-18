import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import {
   mapStateToProps,
   mapDispatchToProps
 } from './PlayerListContainer'
import { PLAYER } from '../constants/itemCategory'
import { deleteItem } from '../actions/itemActions'

describe('PlayerListContainer mapStateToProps', () => {
  it('should return {items: sorted by name array of items}', () => {
    const fakeState = {
      players: {
        items: {
          1: {
            id: 1,
            name: 'Tom'
          },
          2: {
            id: 2,
            name: 'Sim'
          },
          3: {
            id: 3,
            name: 'Quen'
          }
        },
        nextId: 4
      }
    }
    const expected = [
      {
        id: 3,
        name: 'Quen'
      },
      {
        id: 2,
        name: 'Sim'
      },
      {
        id: 1,
        name: 'Tom'
      }
    ]
    expect(mapStateToProps(fakeState).items).to.eql(expected)
  })
})

describe('PlayerListContainer mapDispatchToProps', () => {
  it('should return {itemsHOF: a higher function that build onDelete function', () => {
    const fakeDispatch = (someFunction) => someFunction
    const fakeItem = {
      id: 1
    }
    expect(mapDispatchToProps(fakeDispatch).itemsHOF(fakeItem).onDelete())
    .to.eql(deleteItem(PLAYER, 1))
  })
})
