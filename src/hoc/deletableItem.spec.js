import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import deletableItem from './deletableItem'

describe('deletableItem', () => {
  it('should add delete ui', () => {
    const onDelete = () => 'delete'
    const DumbComponent = () => <div>dumb</div>
    const DeletableItem = deletableItem(DumbComponent)
    const wrapper = shallow(<DeletableItem onDelete={onDelete} />)
    expect(wrapper.prop('uis')).to.eql(
      [{
        glyph: 'trash',
        buttonProps:{
          title: 'delete',
          bsStyle: 'danger',
          onClick: onDelete
        }
      }]
    )
  })
})
