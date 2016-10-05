import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import BoardGameList from './BoardGameList';
import BoardGame from './BoardGame';

const mockItemList = () => [
  {
    id: 1,
    name: 'Earth Reborn'
  },
  {
    id: 2,
    name: 'Dungeon Twister'
  }
];

describe('<BoardGameList />', () => {
  it('renders the entire list of items with <BoardGame>', () => {
    const items = mockItemList();
    const wrapper = shallow(<BoardGameList items = {items}/>);
    const boardGameWrappers = wrapper.find(BoardGame);
    expect(boardGameWrappers).to.have.length(items.length);
  });
  it('renders each <BoardGame> with a unique key>', () => {
    const items = mockItemList();
    const wrapper = shallow(<BoardGameList items = {items}/>);
    const boardGameWrappers = wrapper.find(BoardGame);
    let seen = new Set();
    const boardGameKeys = boardGameWrappers.map(node => node.key());
    const boardGameKeysHasDuplicates = boardGameKeys.some((key) => (
        seen.size === seen.add(key).size
    ));
    expect(boardGameKeysHasDuplicates).to.false;
  });
  it('renders each <BoardGame> with a function removeItem(item.id)>', () => {
    const items = mockItemList();
    const removeItem = (id) => (`remove ${id}`);
    const wrapper = shallow(<BoardGameList
      items = {items}
      removeItem={removeItem}
    />);
    const boardGameWrappers = wrapper.find(BoardGame);
    removeItem(items[0].id);
    expect(boardGameWrappers.at(0).prop('onRemove')())
      .to.equal(removeItem(items[0].id));
  });

});
