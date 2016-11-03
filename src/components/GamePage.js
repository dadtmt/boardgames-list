import React, { PropTypes } from 'react'
import AddGame from '../containers/AddGameContainer'
import GameList from '../containers/GameListContainer'
import Confirm from '../containers/ConfirmContainer'
import { Button, Collapse, FormGroup, Glyphicon, Panel } from 'react-bootstrap'

const GamePage = ({showAddForm, onToggle}) => (
  <div>
    <Confirm path={['form', 'addGame']} />
    <FormGroup>
      <Button bsStyle='primary' onClick={onToggle}>
        <Glyphicon glyph={showAddForm ? 'minus':'plus'} />
      </Button>
    </FormGroup>
    <Collapse in={showAddForm}>
      <Panel>
        <AddGame />
      </Panel>
    </Collapse>
    <GameList />
  </div>
)

GamePage.propTypes = {
  showAddForm: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
}

export default GamePage
