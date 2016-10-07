import React, {PropTypes} from 'react'
import {Field, reduxForm} from 'redux-form'

const AddBoardGameForm = ({handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    <Field name='name' component='input' type='text' />
    <button type='submit'>Add boardgame</button>
  </form>
)

AddBoardGameForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'addBoargGame'
})(AddBoardGameForm)
export {AddBoardGameForm as PureAddBoardGameForm}
