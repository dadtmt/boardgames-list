import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import sinon from 'sinon'
import BoardGame from './BoardGame'

const item = {
  name: 'Dungeon Twister'
}
const onRemove = sinon.spy()
const wrapper = shallow(<BoardGame {...item} onRemove={onRemove} />)

describe('<BoardGame />', () => {
  it('should contains game name', () => {
    const expected = item.name

    expect(wrapper.text()).to.contains(expected)
  })
})
