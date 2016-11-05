import React, {PropTypes} from 'react'
import { Col, ListGroupItem, Row } from 'react-bootstrap'
import ItemUi from './ItemUi'

const Player = ({name, uis}) => (
  <ListGroupItem>
    <Row>
      <Col xs={9}>
        <h4>{name}</h4>
      </Col>
      <Col xs={3}>
        {uis && (<ItemUi uis={uis} />)}
      </Col>
    </Row>
  </ListGroupItem>
)

Player.propTypes = {
  name: PropTypes.string.isRequired,
  uis: PropTypes.array
}

export default Player
