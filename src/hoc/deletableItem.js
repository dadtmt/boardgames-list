import React, { PropTypes } from 'react'

const deletableItem = WrappedComponent => {
  const DeletableItemWrapper = class extends React.Component {
    render() {
      return (
        <div>
          <WrappedComponent {...this.props} />
          <button onClick={this.props.onDelete}>delete</button>
        </div>
      )
    }
  }
  DeletableItemWrapper.propTypes = {
    onDelete: PropTypes.func.isRequired
  }
  DeletableItemWrapper.displayName = 'DeletableItemWrapper_' + WrappedComponent.displayName
  return DeletableItemWrapper
}
export default deletableItem
