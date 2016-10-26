import React, { PropTypes } from 'react'
import { ControlLabel, FormGroup, FormControl } from 'react-bootstrap'

const FieldGroup = ({input, controlId, label, type}) => (
  <FormGroup controlId={controlId}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...input} type={type} />
  </FormGroup>
)

FieldGroup.propTypes = {
  input: PropTypes.object.isRequired,
  controlId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default FieldGroup
