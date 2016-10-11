import React, {PropTypes} from 'react'

const Player = ({name, onRemove}) => (
<div>
  <h4>{name}</h4>
  <button onClick={onRemove}>remove</button>
</div>
)

Player.propTypes = {
  name: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default Player
