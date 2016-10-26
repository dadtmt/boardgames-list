import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import AddGamePlayer from '../containers/AddGamePlayerContainer'
import { Button, Glyphicon } from 'react-bootstrap'

const AddGamePlayers = ({fields}) => (
  <div>
    <Button type='button' title='add game player' onClick={() => fields.push({})} >
      add a player to this game
    </Button>
    {fields.map(
      (field, index) =>
        <div key={index}>
          <Button
            type='button'
            title='remove game player'
            onClick={() => fields.remove(index)}
            bsStyle='danger'
          >
            <Glyphicon glyph='trash' />
          </Button>
          <Field name={field} component={AddGamePlayer} index={index} />
        </div>
    )}
  </div>
)

AddGamePlayers.propTypes = {
  fields: PropTypes.object.isRequired
}

export default AddGamePlayers
