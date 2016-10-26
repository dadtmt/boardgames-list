import React, {PropTypes} from 'react'
import { Badge, Col, Label } from 'react-bootstrap'

const GamePlayer = ({PLAYER: {name}, score, win}) => (
  <Col sm={3}>
    <p>
      <Label bsStyle='primary'>{name}</Label>
      <Label bsStyle='info'>score: <Badge>{score}</Badge></Label>
      {win ?
        (<Badge bsStyle='success'>WIN</Badge>) :
        (<Badge bsStyle='danger'>LOSE</Badge>)}
      </p>
  </Col>
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
