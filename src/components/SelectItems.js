import React, { PropTypes } from 'react'

const SelectItems = ({input, items}) => (
  <select {...input}>
    {items.map(
      (item) =>
        <option key={item.id} value={item.id}>{item.name}</option>
    )}
  </select>
)

SelectItems.propTypes = {
  input: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}

export default SelectItems
