import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import edittableItem from './editableItem'

describe('edittableItem', () => {
  it('should add a edit ui', () => {
    const onEdit = () => 'edit function'
    const DumbComponent = () => <div>dumb</div>
    const DumbItem = edittableItem(DumbComponent)
    const wrapper = shallow(<DumbItem onEdit={onEdit} />)
    expect(wrapper.prop('uis')).to.eql(
      [{
        glyph: 'pencil',
        buttonProps:{
          title: 'edit',
          bsStyle: 'info',
          onClick: onEdit
        }
      }]
    )
  })
})
