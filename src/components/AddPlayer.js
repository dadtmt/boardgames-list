import React, {PropTypes} from 'react'
import {Field, reduxForm} from 'redux-form'

const AddPlayer = ({handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    <Field name='name' component='input' type='text' />
    <button type='submit'>Add player</button>
  </form>
)

AddPlayer.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export {AddPlayer as PureAddPlayer}

export default reduxForm({
  form: 'addPlayer'
})(AddPlayer)
