import React, {PropTypes} from 'react'

const GamePlayer = ({player: {name}, score, win}) => (
<div>
  <p>{name} score: {score} {win ? 'WIN' : 'LOSE'}</p>
</div>
)

GamePlayer.propTypes = {
  player: PropTypes.shape(
    {
      name: PropTypes.string.isRequired
    }
  ).isRequired,
  score: PropTypes.number.isRequired,
  win: PropTypes.bool.isRequired
}

export default GamePlayer
