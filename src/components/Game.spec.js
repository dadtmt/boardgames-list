import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import Game from './Game'
import GamePlayer from './GamePlayer'

const item = {
  id: 1,
  boardGame: {
    name: 'Earth Reborn'
  },
  players: [
    {
      player:{
        id: 2,
        name: 'Sim'
      },
      score: 5,
      win: false
    },
    {
      player:{
        id: 1,
        name: 'Tom'
      },
      score: 25,
      win: true
    },
    {
      player:{
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
    const expected = item.boardGame.name

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
