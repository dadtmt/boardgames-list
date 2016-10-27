import React, {PropTypes} from 'react'
import { Alert, Col, Label, Row } from 'react-bootstrap'

const GamePlayer = ({PLAYER: {name}, score, win}) => (
  <Col sm={3}>
    <Alert bsStyle={win ? 'success':'danger'}>
    <Row>
      <Col xs={4}>
      <strong>{name}</strong>
      </Col>
      <Col xs={4}>
      <Label bsStyle='info'>score: {score}</Label>
      </Col>
      <Col xs={4}>
        <strong>{win ? 'WIN' : 'LOSE'}</strong>
      </Col>
      </Row>
      </Alert>
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
