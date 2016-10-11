import { expect } from 'chai'
import reducer from './playersReducer'
import initialState from './initialState'
import {addPlayer, removePlayer} from '../actions/playersActions'

describe('Reducers::players', ()=> {

  it('should set initialState by default', () => {
    const getInitialState = () => {
      return initialState.players
    }
    const action = { type: 'unknown' }
    const expected = getInitialState()
    expect(reducer(undefined, action)).eql(expected)
  })

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

  it('should handle ADD_PLAYER action: add a player', () => {
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
    expect(reducer(fakeState, addPlayer(item))).to.be.eql(expected)
  })

  it('should handle ADD_PLAYER action: not add item if name already in state', () => {
    const item = {
      name: 'Dungeon Twister'
    }
    expect(reducer(fakeState, addPlayer(item))).to.be.eql(fakeState)
  })

  it('should handle ADD_PLAYER action: not add if item is empty', () => {
    expect(reducer(fakeState, addPlayer({}))).to.be.eql(fakeState)
  })

  it('should handle REMOVE_PLAYER action delete an item if it is present chencking by id', () => {
    const expected = {
      items: [
        {
          id: 2,
          name: 'Dungeon Twister'
        }
      ],
      nextId: 3
    }
    expect(reducer(fakeState, removePlayer(1))).to.be.eql(expected)
    expect(reducer(fakeState, removePlayer(10))).to.be.eql(fakeState)
  })
})
