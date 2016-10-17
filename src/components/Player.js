import React, {PropTypes} from 'react'

const Player = ({name}) => (
<div>
  <h4>{name}</h4>
</div>
)

Player.propTypes = {
  name: PropTypes.string.isRequired
}

export default Player
