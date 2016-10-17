import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import listableItem from './listableItem'

const items = [
  {
    some: 'item1'
  },
  {
    some: 'item2'
  },
  {
    some: 'item3'
  },
  {
    some: 'item4'
  }
]

const DumbComponent = () => <div>dumb</div>

const itemsHOF = item => ({
  getSome: () => item.some,
  returnSomething: () => 'something'
})

describe('listableItem', () => {

  it('renders the entire list of items', () => {
    const ListableItem = listableItem(DumbComponent)
    const wrapper = shallow(<ListableItem items={items} itemsHOF={itemsHOF} />)
    const childWrappers = wrapper.find(DumbComponent)
    expect(childWrappers).to.have.length(items.length)
  })

  it('renders  each item with a unique key', () => {
    const ListableItem = listableItem(DumbComponent)
    const wrapper = shallow(<ListableItem items={items} itemsHOF={itemsHOF} />)
    const childWrappers = wrapper.find(DumbComponent)
    let seen = new Set()
    const childKeys = childWrappers.map(node => node.key())
    const childKeysHasDuplicates = childKeys.some((key) => (
        seen.size === seen.add(key).size
    ))
    expect(childKeysHasDuplicates).to.false
  })

  it('should pass down to each items itemsHOF', () => {
    const ListableItem = listableItem(DumbComponent)
    const wrapper = shallow(<ListableItem items={items} itemsHOF={itemsHOF} />)
    const childWrappers = wrapper.find(DumbComponent)
    expect(childWrappers.at(0).prop('getSome')())
      .to.equal('item1')
    expect(childWrappers.at(0).prop('returnSomething')())
      .to.equal('something')
  })
})
