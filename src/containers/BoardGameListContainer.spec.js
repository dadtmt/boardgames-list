import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {
  PureBoardGameListContainer,
   mapStateToProps
 } from './BoardGameListContainer';
import BoardGameList from '../components/BoardGameList';

describe('<BoardGameListContainer />', () => {
  it('should renders same as <BoardGameList />', () => {
    const wrapperContainer = shallow(
      <PureBoardGameListContainer items={[]} removeItem={()=>{}} />
    );
    const wrapper = shallow(<BoardGameList items={[]} removeItem={()=>{}} />);
    expect(wrapperContainer.html()).to.equals(wrapper.html());
  });
});

describe('BoardGameListContainer mapStateToProps', () => {
  it('should return {items: array of state.boardGames}', () => {
    const fakeState = {
      boardGames: {
        1: {
          name: 'Dungeon Twister'
        },
        2: {
          name: 'Earth Reborn'
        }
      }
    };
    const expected = [
      {
        name: 'Dungeon Twister'
      },
      {
        name: 'Earth Reborn'
      }
    ];
    expect(mapStateToProps(fakeState).items).to.eql(expected);
  });
});
