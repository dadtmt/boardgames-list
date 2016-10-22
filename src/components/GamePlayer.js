import React, {PropTypes} from 'react'

const GamePlayer = ({PLAYER: {name}, score, win}) => (
<div>
  <p>{name} score: {score} {win ? 'WIN' : 'LOSE'}</p>
</div>
)

GamePlayer.propTypes = {
  PLAYER: PropTypes.shape(
    {
      name: PropTypes.string.isRequired
    }
  ).isRequired,
  score: PropTypes.number,
  win: PropTypes.bool
}

export default GamePlayer
