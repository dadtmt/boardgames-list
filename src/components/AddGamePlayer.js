import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import SelectItems from './SelectItems'
import { PLAYER } from '../constants/itemCategory'

const AddGamePlayer = ({name, items}) => (
  <div>
  <Field name={`${name}_${PLAYER}`} component={SelectItems} items={items} />
  <Field name={`${name}.score`} component='input' type='number' />
  <Field name={`${name}.win`} component='input' type='checkbox' />
  </div>
)

AddGamePlayer.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}

export default AddGamePlayer
