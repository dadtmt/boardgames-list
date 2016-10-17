import React, { PropTypes } from 'react'

const listableItem = WrappedComponent => {
  const ListableItemWrapper = class extends React.Component {
    render() {
      return (
        <div>
          {this.props.items.map(
            (item, key) => {
              return (<WrappedComponent
                {...item}
                key={key}
                {...this.props.itemsHOF(item)}
              />)
            }
          )}
        </div>
      )
    }
  }
  ListableItemWrapper.propTypes = {
    items: PropTypes.array.isRequired,
    itemsHOF: PropTypes.func.isRequired
  }
  ListableItemWrapper.displayName = 'ListableItemWrapper_' + WrappedComponent.displayName
  return ListableItemWrapper
}
export default listableItem
