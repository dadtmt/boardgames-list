import React, {PropTypes} from 'react'
import Player from './Player'

const PlayerList = ({items, removeItem}) => (
  <div>
    {items.map((item, key) => <Player
      key={key}
      {...item}
      onRemove={() => removeItem(item.id)}
      />
    )}
  </div>
)

PlayerList.propTypes = {
  items: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired
}

export default PlayerList
