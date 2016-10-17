import React, {PropTypes} from 'react'

const BoardGame = ({name}) => (
<div>
  <h4>{name}</h4>
</div>
)

BoardGame.propTypes = {
  name: PropTypes.string.isRequired
}

export default BoardGame
