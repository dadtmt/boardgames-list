import React, { PropTypes } from 'react'
import { ListGroup } from 'react-bootstrap'

const listableItem = WrappedComponent => {
  const ListableItemWrapper = class extends React.Component {
    render() {
      return (
        <ListGroup>
          {this.props.items.map(
            (item, key) => {
              return (<WrappedComponent
                {...item}
                key={key}
                {...this.props.itemsHOF(item)}
              />)
            }
          )}
        </ListGroup>
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
