import React, {PropTypes} from 'react';
import BoardGame from './BoardGame';

const BoardGameList = ({items}) => (
  <div>
    {items.map((item, key) => <BoardGame key={key} {...item}/>)}
  </div>
);

BoardGameList.propTypes = {
  items: PropTypes.array.isRequired
};

export default BoardGameList;
