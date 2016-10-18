import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'
import deletableItem from './deletableItem'

describe('deletableItem', () => {
  it('should contains dumb', () => {
    const onDelete = sinon.spy()
    const DumbComponent = () => <div>dumb</div>
    const DeletAbleItem = deletableItem(DumbComponent)
    const wrapper = shallow(<DeletAbleItem onDelete={onDelete} />)
    const deleteButtonWrapper = wrapper.find('button')
    const expected = 'delete'

    expect(deleteButtonWrapper.text()).to.equal(expected)
    deleteButtonWrapper.simulate('click')
    expect(onDelete.calledOnce).to.be.true
  })
})