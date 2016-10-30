import React, { PropTypes } from 'react'
import { reduxForm, Field, FieldArray } from 'redux-form'
import SelectItems from './SelectItems'
import AddGamePlayers from './AddGamePlayers'
import { BOARDGAME } from '../constants/itemCategory'
import {  Button, FormGroup, Glyphicon } from 'react-bootstrap'

const AddGame = ({handleSubmit, pristine, reset, boardGames}) => (
  <form onSubmit={handleSubmit}>
    <Field
      name={BOARDGAME}
      component={SelectItems}
      items={boardGames}
      placeholder='Select a boardgame'
      controlId='selectBoardGame'
      label='What we play:'
    />
    <FieldArray name='players' component={AddGamePlayers} />
    <FormGroup className='text-center'>
      <Button
        type='submit'
        bsStyle='primary'
        title='Save game'
        bsSize='large'
        disabled={pristine}
      >
        <Glyphicon glyph='send' />
      </Button>
      {' '}
      <Button
        type='button'
        bsStyle='warning'
        title='Reset'
        bsSize='large'
        onClick={reset}
        disabled={pristine}
      >
        <Glyphicon glyph='erase' />
      </Button>
    </FormGroup>
  </form>
)

AddGame.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  boardGames: PropTypes.array.isRequired
}

export {AddGame as PureAddGame}

export default reduxForm({
  form: 'addGame',
  enableReinitialize: true
})(AddGame)
