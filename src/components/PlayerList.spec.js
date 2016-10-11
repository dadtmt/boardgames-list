import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import PlayerList from './PlayerList'
import Player from './Player'

const items = [
  {
    id: 1,
    name: 'Earth Reborn'
  },
  {
    id: 2,
    name: 'Dungeon Twister'
  }
]
const removeItem = (id) => (`remove ${id}`)
const wrapper = shallow(<PlayerList
  items = {items}
  removeItem={removeItem}
/>)
const boardGameWrappers = wrapper.find(Player)

describe('<PlayerList />', () => {
  it('renders the entire list of items with <Player>', () => {
    expect(boardGameWrappers).to.have.length(items.length)
  })
  it('renders each <Player> with a unique key>', () => {
    let seen = new Set()
    const boardGameKeys = boardGameWrappers.map(node => node.key())
    const boardGameKeysHasDuplicates = boardGameKeys.some((key) => (
        seen.size === seen.add(key).size
    ))
    expect(boardGameKeysHasDuplicates).to.false
  })
  it('renders each <Player> with a function removeItem(item.id)>', () => {
    expect(boardGameWrappers.at(0).prop('onRemove')())
      .to.equal(removeItem(items[0].id))
  })

})
