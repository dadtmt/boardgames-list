import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import {
  PurePlayerListContainer,
   mapStateToProps,
   mapDispatchToProps
 } from './PlayerListContainer'
import PlayerList from '../components/PlayerList'
import { PLAYER } from '../constants/itemCategory'
import { deleteItem } from '../actions/itemActions'

describe('<PlayerListContainer />', () => {
  it('should renders same as <PlayerList />', () => {
    const wrapperContainer = shallow(
      <PurePlayerListContainer items={[]} removeItem={()=>{}} />
    )
    const wrapper = shallow(<PlayerList items={[]} removeItem={()=>{}} />)
    expect(wrapperContainer.html()).to.equals(wrapper.html())
  })
})

describe('PlayerListContainer mapStateToProps', () => {
  it('should return {items: sorted by name array of items}', () => {
    const fakeState = {
      players: {
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
    }

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
    expect(mapStateToProps(fakeState).items).to.eql(expected)
  })
})

describe('PlayerListContainer mapDispatchToProps', () => {
  it('should return {removeItem: a function that dispatch removePlayer}', () => {
    const fakeDispatch = (someFunction) => someFunction

    expect(mapDispatchToProps(fakeDispatch).removeItem(1))
    .to.eql(deleteItem(PLAYER, 1))
  })
})
