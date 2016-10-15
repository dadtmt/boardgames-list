import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import {
  PureBoardGameListContainer,
   mapStateToProps,
   mapDispatchToProps
 } from './BoardGameListContainer'
import BoardGameList from '../components/BoardGameList'
import { BOARDGAME } from '../constants/itemCategory'
import { deleteItem } from '../actions/itemActions'

describe('<BoardGameListContainer />', () => {
  it('should renders same as <BoardGameList />', () => {
    const wrapperContainer = shallow(
      <PureBoardGameListContainer items={[]} removeItem={()=>{}} />
    )
    const wrapper = shallow(<BoardGameList items={[]} removeItem={()=>{}} />)
    expect(wrapperContainer.html()).to.equals(wrapper.html())
  })
})

describe('BoardGameListContainer mapStateToProps', () => {
  it('should return {items: sorted by name array of items}', () => {
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
      }
    }

    const expected = [
      {
        id: 2,
        name: 'Dungeon Twister'
      },
      {
        id: 1,
        name: 'Earth Reborn'
      }
    ]
    expect(mapStateToProps(fakeState).items).to.eql(expected)
  })
})

describe('BoardGameListContainer mapDispatchToProps', () => {
  it('should return {removeItem: a function that dispatch deleteItem}', () => {
    const fakeDispatch = (someFunction) => someFunction
    expect(mapDispatchToProps(fakeDispatch).removeItem(1))
    .to.eql(deleteItem(BOARDGAME, 1))
  })
})
