import React from 'react'
import AddGame from '../containers/AddGameContainer'
import GameList from '../containers/GameListContainer'
import { Button, Collapse, FormGroup, Glyphicon, Panel } from 'react-bootstrap'

class GamePage extends React.Component {
  constructor(...args) {
    super (...args)
    this.state = {
      showAddForm: false
    }
  }
  render() {
    return (
      <div>
        <FormGroup>
          <Button bsStyle='primary' onClick={()=> this.setState({ showAddForm: !this.state.showAddForm })}>
            <Glyphicon glyph={this.state.showAddForm ? 'minus':'plus'} />
          </Button>
        </FormGroup>
        <Collapse in={this.state.showAddForm}>
          <Panel>
            <AddGame />
          </Panel>
        </Collapse>
        <GameList />
      </div>
    )
  }
}

export default GamePage
