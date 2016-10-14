import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import GamePlayer from './GamePlayer'


describe('<GamePlayer />', () => {
  it('should contains player name', () => {
    const item = {
      player:{
        id: 2,
        name: 'Sim'
      },
      score: 5,
      win: false
    }
    const wrapper = shallow(<GamePlayer {...item} />)
    const expected = 'Sim'
    expect(wrapper.text()).to.contains(expected)
  })

  it('should contains score', () => {
    const item = {
      player:{
        id: 2,
        name: 'Sim'
      },
      score: 5,
      win: false
    }
    const wrapper = shallow(<GamePlayer {...item} />)
    const expected = 5
    expect(wrapper.text()).to.contains(expected)
  })

  it('should contains lose status if win is false', () => {
    const item = {
      player:{
        id: 2,
        name: 'Sim'
      },
      score: 5,
      win: false
    }
    const wrapper = shallow(<GamePlayer {...item} />)
    const expected = 'LOSE'
    expect(wrapper.text()).to.contains(expected)
  })

  it('should contains win status if win is true', () => {
    const item = {
      player:{
        id: 2,
        name: 'Sim'
      },
      score: 5,
      win: true
    }
    const wrapper = shallow(<GamePlayer {...item} />)
    const expected = 'WIN'
    expect(wrapper.text()).to.contains(expected)
  })
})
