import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import BoardGameList from './BoardGameList'
import BoardGame from './BoardGame'

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
const wrapper = shallow(<BoardGameList
  items = {items}
  removeItem={removeItem}
/>)
const boardGameWrappers = wrapper.find(BoardGame)

describe('<BoardGameList />', () => {
  it('renders the entire list of items with <BoardGame>', () => {
    expect(boardGameWrappers).to.have.length(items.length)
  })
  it('renders each <BoardGame> with a unique key>', () => {
    let seen = new Set()
    const boardGameKeys = boardGameWrappers.map(node => node.key())
    const boardGameKeysHasDuplicates = boardGameKeys.some((key) => (
        seen.size === seen.add(key).size
    ))
    expect(boardGameKeysHasDuplicates).to.false
  })
  it('renders each <BoardGame> with a function removeItem(item.id)>', () => {
    expect(boardGameWrappers.at(0).prop('onRemove')())
      .to.equal(removeItem(items[0].id))
  })

})
