import React, { PropTypes } from 'react'
import Game from './Game'

const GameList = ({items, removeItem}) => (
  <div>
    {items.map((item, key) => <Game
      key={key}
      {...item}
      onRemove={() => removeItem(item.id)}
      />
    )}
  </div>
)

GameList.propTypes = {
  items: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired
}

export default GameList
