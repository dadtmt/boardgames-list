import React, { PropTypes } from 'react'
import { ControlLabel, FormGroup, FormControl } from 'react-bootstrap'

const SelectItems = ({input, placeholder, items, controlId, label}) => (
  <FormGroup controlId={controlId}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl componentClass='select' {...input}>
      <option disabled hidden value=''>{placeholder}</option>
      {items.map(
        (item) => <option key={item.id} value={item.id}>{item.name}</option>
      )}
    </FormControl>
  </FormGroup>
)

SelectItems.propTypes = {
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  controlId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default SelectItems
