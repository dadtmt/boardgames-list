import React from 'react'
import { shallow } from 'enzyme'
import { expect} from 'chai'
import sinon from 'sinon'
import { PureAddGame as AddGame } from './AddGame'
import SelectItems from './SelectItems'

describe('<AddGame />',() => {
  const boardGames = [
    {
      id: 2,
      name: 'Dungeon Twister'
    },
    {
      id: 1,
      name: 'Earth Reborn'
    }
  ]
  const fakeSubmit = sinon.spy()
  const wrapper = shallow(<AddGame
    handleSubmit={fakeSubmit}
    boardGames={boardGames}
  />)

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

  it('should have a field <Field name="BOARDGAME" component={SelectItems} items={boardGames}/>', () => {
    const boargamesFieldWrapper = (wrapper.find('Field[name="BOARDGAME"]'))
    expect(boargamesFieldWrapper.prop('items')).to.eql(boardGames)
    expect(boargamesFieldWrapper.prop('component')).to.equal(SelectItems)
  })
})
