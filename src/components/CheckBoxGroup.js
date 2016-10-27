import React, { PropTypes } from 'react'
import { Checkbox } from 'react-bootstrap'

const FieldGroup = ({input, label}) => (
    <Checkbox {...input} >{label}</Checkbox >
)

FieldGroup.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired
}

export default FieldGroup
