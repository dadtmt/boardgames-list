import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import SelectItems from './SelectItems'

describe('SelectItems', () => {
  const items = [
    {
      id: 1,
      name: 'item1'
    },
    {
      id: 2,
      name: 'item2'
    },
    {
      id: 3,
      name: 'item3'
    },
    {
      id: 4,
      name: 'item4'
    }
  ]

  const wrapper = shallow(<SelectItems items={items} />)
  it('should renders a <select /> with as many options as items', () => {
    expect(wrapper.find('select').find('option')).to.have.length(items.length)
  })
})
