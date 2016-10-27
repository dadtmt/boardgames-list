import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import AddGamePlayer from '../containers/AddGamePlayerContainer'
import {
  Button,
  Collapse,
  FormGroup,
  Panel,
  Glyphicon
} from 'react-bootstrap'

const AddGamePlayers = ({fields}) => (
  <div>
    {fields.map((field, index) =>
      <div  key={index}>
        <Collapse transitionAppear in>
        <Panel>
          <FormGroup>
            <Button
              type='button'
              title='remove game player'
              onClick={() => fields.remove(index)}
              bsStyle='danger'
              className='pull-right'
            >
              <Glyphicon glyph='trash' />
            </Button>
          </FormGroup>
          <Field name={field} component={AddGamePlayer} index={index} />
        </Panel>
        </Collapse>
      </div>
    )}
    <FormGroup>
      <Button
        type='button'
        title='add game player'
        onClick={() => fields.push({})}
        bsStyle='info'
      >
        <Glyphicon glyph='plus' />
        <strong> Player</strong>
      </Button>
    </FormGroup>
  </div>
)

AddGamePlayers.propTypes = {
  fields: PropTypes.object.isRequired
}

export default AddGamePlayers
