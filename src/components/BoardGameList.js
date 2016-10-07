import React, {PropTypes} from 'react'
import BoardGame from './BoardGame'

const BoardGameList = ({items, removeItem}) => (
  <div>
    {items.map((item, key) => <BoardGame
      key={key}
      {...item}
      onRemove={() => removeItem(item.id)}
      />
    )}
  </div>
)

BoardGameList.propTypes = {
  items: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired
}

export default BoardGameList
