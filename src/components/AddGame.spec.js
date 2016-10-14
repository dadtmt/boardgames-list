import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import sinon from 'sinon'
import {PureAddGame as AddGame} from './AddGame'

describe('<AddGame />',() => {
  const fakeSubmit = sinon.spy()
  const wrapper = shallow(<AddGame handleSubmit={fakeSubmit}/>)

  it('should have a <form /> with onSubmit function', () => {
    const formWrapper = wrapper.find('form')
    expect(formWrapper).to.have.length(1)
    expect(formWrapper.props().onSubmit).to.be.a('function')
    formWrapper.props().onSubmit()
    expect(fakeSubmit.calledOnce).to.be.true
  })

  it('should have a submit button', () => {
    const submitWrapper = wrapper.find('button[type="submit"]')
    expect(submitWrapper).to.have.length(1)
  })
})
