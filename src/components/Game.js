import React, {PropTypes} from 'react'
import { Panel } from 'react-bootstrap'
import GamePlayer from './GamePlayer'

const Game = ({BOARDGAME: {name}, players}) => (
  <Panel header={<h4>Played to {name}</h4>}>
    {players.map((item, key) => <GamePlayer key={key} {...item} /> )}
  </Panel>
)

Game.propTypes = {
  BOARDGAME: PropTypes.shape(
    {
      name: PropTypes.string.isRequired
    }
  ).isRequired,
  players: PropTypes.array.isRequired
}

export default Game
