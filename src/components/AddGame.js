import R from 'ramda'
import React, { PropTypes } from 'react'
import {
  reduxForm,
  Field,
  FieldArray,
  propTypes as formProptypes
} from 'redux-form'
import SelectItems from './SelectItems'
import AddGamePlayers from './AddGamePlayers'
import { BOARDGAME } from '../constants/itemCategory'
import {  Button, ButtonToolbar, Glyphicon } from 'react-bootstrap'

const AddGame = ({handleSubmit, pristine, reset, boardGames, currentItem}) => (
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
    <ButtonToolbar>
      <Button
        type='submit'
        bsStyle='primary'
        title='Save game'
        bsSize='large'
        disabled={pristine}
      >
        <Glyphicon glyph='send' />
      </Button>
      <Button
        type='button'
        bsStyle='warning'
        title='Clear modifications'
        bsSize='large'
        onClick={reset}
        disabled={pristine}
      >
        <Glyphicon glyph='erase' />
      </Button>
      {!R.isEmpty(currentItem) && <Button
        type='button'
        bsStyle='info'
        title='Clear values and create new game'
        bsSize='large'
        onClick={() => {}}
      >
        <Glyphicon glyph='new-window' />
      </Button>}
    </ButtonToolbar>
  </form>
)

AddGame.propTypes = {
  ...formProptypes,
  boardGames: PropTypes.array.isRequired,
  currentItem: PropTypes.object.isRequired
}

export {AddGame as PureAddGame}

export default reduxForm({
  form: 'addGame',
  enableReinitialize: true
})(AddGame)
