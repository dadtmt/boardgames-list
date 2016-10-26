import React, { PropTypes } from 'react'
import { reduxForm, Field, FieldArray } from 'redux-form'
import SelectItems from './SelectItems'
import AddGamePlayers from './AddGamePlayers'
import { BOARDGAME } from '../constants/itemCategory'
import {  Button } from 'react-bootstrap'

const AddGame = ({handleSubmit, boardGames}) => (
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
    <Button type='submit'>Add game</Button>
  </form>
)

AddGame.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  boardGames: PropTypes.array.isRequired
}

export {AddGame as PureAddGame}

export default reduxForm({
  form: 'addGame'
})(AddGame)

// Next remove incorrect spec files
// Thunk add game
