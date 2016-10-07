import React, {PropTypes} from 'react'

const BoardGame = ({name, onRemove}) => (
<div>
  <h4>{name}</h4>
  <button onClick={onRemove}>remove</button>
</div>
)

BoardGame.propTypes = {
  name: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default BoardGame
