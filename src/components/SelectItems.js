import React, { PropTypes } from 'react'

const SelectItems = ({items}) => (
  <select>
    {items.map(
      (item) =>
        <option key={item.id} value={item.id}>{item.name}</option>
    )}
  </select>
)

SelectItems.propTypes = {
  items: PropTypes.array.isRequired
}

export default SelectItems
