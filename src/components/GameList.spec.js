import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import GameList from './GameList'
import Game from './Game'

const items = [
  {
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
  },
  {
    id: 2,
    boardGame: {
      id: 2,
      name: 'Dungeon Twister'
    },
    players: [
      {
        player:{
          id: 3,
          name: 'Quen'
        },
        score: 5,
        win: true
      },
      {
        player:{
          id: 1,
          name: 'Tom'
        },
        score: 0,
        win: false
      },
      {
        player:{
          id: 2,
          name: 'Sim'
        },
        score: 0,
        win: true
      }
    ]
  }
]
const removeItem = (id) => (`remove ${id}`)
const wrapper = shallow(<GameList
  items = {items}
  removeItem={removeItem}
/>)
const gameWrappers = wrapper.find(Game)

describe('<GameList />', () => {
  it('renders the entire list of items with <Game>', () => {
    expect(gameWrappers).to.have.length(items.length)
  })
  it('renders each <Game> with a unique key>', () => {
    let seen = new Set()
    const gameKeys = gameWrappers.map(node => node.key())
    const gameKeysHasDuplicates = gameKeys.some((key) => (
        seen.size === seen.add(key).size
    ))
    expect(gameKeysHasDuplicates).to.false
  })
  it('renders each <Game> with a function removeItem(item.id)>', () => {
    expect(gameWrappers.at(0).prop('onRemove')())
      .to.equal(removeItem(items[0].id))
  })

})
