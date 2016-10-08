import React, {PropTypes} from 'react'
import {Field, reduxForm} from 'redux-form'

const AddBoardGame = ({handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    <Field name='name' component='input' type='text' />
    <button type='submit'>Add boardgame</button>
  </form>
)

AddBoardGame.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export {AddBoardGame as PureAddBoardGame}

export default reduxForm({
  form: 'addBoardGame'
})(AddBoardGame)
