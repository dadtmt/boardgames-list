import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import deletableItem from './deletableItem'

describe('deletableItem', () => {
  it('should add a delete button', () => {
    const onDelete = 'some function'
    const DumbComponent = () => <div>dumb</div>
    const DeletableItem = deletableItem(DumbComponent)
    const wrapper = shallow(<DeletableItem onDelete={onDelete} />)
    expect(wrapper.prop('uis')).to.eql(
      [{
        glyph: 'trash',
        buttonProps:{
          title: 'delete',
          bsStyle: 'danger',
          onClick: 'some function'
        }
      }]
    )
  })
})
