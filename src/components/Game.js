import React, {PropTypes} from 'react'
import GamePlayer from './GamePlayer'

const Game = ({boardGame: {name}, players, onRemove}) => (
<div>
  <h4>Played to {name}</h4>
  <div>{players.map((item, key) => <GamePlayer key={key} {...item} /> )}</div>
  <button onClick={onRemove}>remove</button>
</div>
)

Game.propTypes = {
  boardGame: PropTypes.shape(
    {
      name: PropTypes.string.isRequired
    }
  ).isRequired,
  players: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default Game
