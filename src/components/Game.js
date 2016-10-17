import React, {PropTypes} from 'react'
import GamePlayer from './GamePlayer'

const Game = ({boardGame: {name}, players}) => (
<div>
  <h4>Played to {name}</h4>
  <div>{players.map((item, key) => <GamePlayer key={key} {...item} /> )}</div>
</div>
)

Game.propTypes = {
  boardGame: PropTypes.shape(
    {
      name: PropTypes.string.isRequired
    }
  ).isRequired,
  players: PropTypes.array.isRequired
}

export default Game
