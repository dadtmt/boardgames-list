import React, {PropTypes} from 'react'
import { Col, Panel, Row } from 'react-bootstrap'
import ItemUi from './ItemUi'
import GamePlayer from './GamePlayer'

const Game = ({BOARDGAME: {name}, players, uis}) => {
  const header = (
    <Row>
      <Col xs={9}>
        <h4>We played to {name}</h4>
      </Col>
      <Col xs={3}>
        {uis && (<ItemUi uis={uis} />)}
      </Col>
    </Row>
  )
  return (
    <Panel header={header}>
      {players.map((item, key) => <GamePlayer key={key} {...item} /> )}
    </Panel>
  )
}

Game.propTypes = {
  BOARDGAME: PropTypes.shape(
    {
      name: PropTypes.string.isRequired
    }
  ).isRequired,
  players: PropTypes.array.isRequired,
  uis: PropTypes.array
}

export default Game
