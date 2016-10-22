import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import Game from './Game'
import GamePlayer from './GamePlayer'

const item = {
  id: 1,
  BOARDGAME: {
    name: 'Earth Reborn'
  },
  players: [
    {
      PLAYER:{
        id: 2,
        name: 'Sim'
      },
      score: 5,
      win: false
    },
    {
      PLAYER:{
        id: 1,
        name: 'Tom'
      },
      score: 25,
      win: true
    },
    {
      PLAYER:{
        id: 3,
        name: 'Quen'
      },
      score: 5,
      win: false
    }
  ]
}

const wrapper = shallow(<Game {...item} />)

describe('<Game />', () => {
  it('should contains boardgame name', () => {
    const expected = item.BOARDGAME.name

    expect(wrapper.text()).to.contains(expected)
  })

  const gamePlayerWrappers = wrapper.find(GamePlayer)

  it('renders the entire list of players with <GamePlayer />', () => {
    expect(gamePlayerWrappers).to.have.length(item.players.length)
  })

  it('renders each <GamePlayer> with a unique key>', () => {
    let seen = new Set()
    const keys = gamePlayerWrappers.map(node => node.key())
    const keysHasDuplicates = keys.some((key) => (
        seen.size === seen.add(key).size
    ))
    expect(keysHasDuplicates).to.false
  })
})
