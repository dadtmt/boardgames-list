import React, {PropTypes} from 'react'
import {reduxForm} from 'redux-form'

const AddGame = ({handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    <button type='submit'>Add game</button>
  </form>
)

AddGame.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export {AddGame as PureAddGame}

export default reduxForm({
  form: 'addGame'
})(AddGame)
