import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import {
  PureGameListContainer,
   mapStateToProps,
   mapDispatchToProps
 } from './GameListContainer'
import GameList from '../components/GameList'
import { removeGame } from '../actions/gamesActions'

describe('<GameListContainer />', () => {
  it('should renders same as <GameList />', () => {
    const wrapperContainer = shallow(
      <PureGameListContainer items={[]} />
    )
    const wrapper = shallow(<GameList items={[]} />)
    expect(wrapperContainer.html()).to.equals(wrapper.html())
  })
})

describe('GameListContainer mapStateToProps', () => {
  it('should return { items: populateGames}', () => {
    const fakeState = {
      boardGames: {
        items: [
          {
            id: 1,
            name: 'Earth Reborn'
          },
          {
            id: 2,
            name: 'Dungeon Twister'
          }
        ],
        nextId: 3
      },
      players: {
        items: [
          {
            id: 1,
            name: 'Tom'
          },
          {
            id: 2,
            name: 'Sim'
          },
          {
            id: 3,
            name: 'Quen'
          }
        ],
        nextId: 4
      },
      games: {
        nextId: 3,
        items: [
          {
            id: 1,
            boardGame: 1,
            players: [
              {
                player:2,
                score: 5,
                win: false
              },
              {
                player:1,
                score: 25,
                win: true
              },
              {
                player:3,
                score: 5,
                win: false
              }
            ]
          },
          {
            id: 2,
            boardGame: 2,
            players: [
              {
                player:3,
                score: 5,
                win: true
              },
              {
                player:1,
                score: 0,
                win: false
              },
              {
                player:2,
                score: 0,
                win: true
              }
            ]
          }
        ]
      }
    }
    const expected = {
      items: [
        {
          id: 1,
          boardGame: {
            id: 1,
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
    }
    expect(mapStateToProps(fakeState)).to.eql(expected)
  })
})

describe('GameListContainer mapDispatchToProps', () => {
  it('should return {removeItem: a function that dispatch removeGame}', () => {
    const fakeDispatch = (someFunction) => someFunction

    expect(mapDispatchToProps(fakeDispatch).removeItem(1))
    .to.eql(removeGame(1))
  })
})
