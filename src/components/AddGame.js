import React, { PropTypes } from 'react'
import { reduxForm, Field, FieldArray } from 'redux-form'
import SelectItems from './SelectItems'
import AddGamePlayers from './AddGamePlayers'
import { BOARDGAME } from '../constants/itemCategory'

const AddGame = ({handleSubmit, boardGames}) => (
  <form onSubmit={handleSubmit}>
    <Field name={BOARDGAME} component={SelectItems} items={boardGames} />
    <FieldArray name='players' component={AddGamePlayers} />
    <button type='submit'>Add game</button>
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
