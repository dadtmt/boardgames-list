import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import ItemUi from './ItemUi'

const wrapper = shallow(<ItemUi uis={[
  {
    buttonProps: {
      title: 'update',
      bsStyle: 'warning',
      onClick: 'onUpdate'
    },
    glyph: 'update'
  },
  {
    glyph: 'trash',
    buttonProps:{
      title: 'delete',
      bsStyle: 'danger',
      onClick: 'onDelete'
    }
  }
]} />)

describe('<ItemUi />', () => {
  it('should as many Button as ui', () => {
    expect(wrapper.find('Button')).to.have.length(2)
  })
})
