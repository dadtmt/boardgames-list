import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import sinon from 'sinon'
import Player from './Player'

const item = {
  name: 'Dungeon Twister'
}
const onRemove = sinon.spy()
const wrapper = shallow(<Player {...item} onRemove={onRemove} />)

describe('<Player />', () => {
  it('should contains player name', () => {
    const expected = item.name

    expect(wrapper.text()).to.contains(expected)
  })
})
