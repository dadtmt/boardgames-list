import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {PureBoardGameListContainer, mapStateToProps} from './BoardGameListContainer';
import BoardGameList from '../components/BoardGameList';

describe('<BoardGameListContainer />', () => {
  it('should renders same as <BoardGameList />', () => {
    const wrapperContainer = shallow(<PureBoardGameListContainer items={[]} />);
    const wrapper = shallow(<BoardGameList items={[]} />);
    expect(wrapperContainer.html()).to.equals(wrapper.html());
  });
});

describe('BoardGameListContainer mapStateToProps', () => {
  it('should return {items: state.boardGames}', () => {
    const fakeState = {
      boardGames: [{
        name: 'Dungeon Twister'
      },
      {
        name: 'Earth Reborn'
      }]};
    expect(mapStateToProps(fakeState).items).to.eql(fakeState.boardGames);
  });
});
