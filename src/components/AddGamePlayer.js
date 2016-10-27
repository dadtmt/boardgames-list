import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import { Col } from 'react-bootstrap'
import FieldGroup from './FieldGroup'
import CheckBoxGroup from './CheckBoxGroup'
import SelectItems from './SelectItems'
import { PLAYER } from '../constants/itemCategory'

const AddGamePlayer = ({name, items}) => (
  <div>
    <Col sm={8}>
      <Field
        name={`${name}.${PLAYER}`}
        component={SelectItems}
        items={items}
        placeholder='Select a player'
        controlId={`${name}_${PLAYER}`}
        label='Player:'
      />
    </Col>
    <Col sm={2}>
      <Field
        name={`${name}.score`}
        component={FieldGroup}
        type='number'
        controlId={`${name}_score`}
        label='Score'
      />
    </Col>
    <Col sm={2}>
      <Field
        name={`${name}.win`}
        component={CheckBoxGroup}
        label='is a winner'
      />
    </Col>
  </div>
)

AddGamePlayer.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}

export default AddGamePlayer
