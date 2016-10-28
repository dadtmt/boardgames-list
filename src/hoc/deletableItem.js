import React, { PropTypes } from 'react'
import { addUi } from './ui'

const deletableItem = WrappedComponent => {
  const DeletableItemWrapper = class extends React.Component {
    render() {
      return (
        <WrappedComponent {...addUi({
          glyph: 'trash',
          buttonProps:{
            title: 'delete',
            bsStyle: 'danger',
            onClick: this.props.onDelete
          }
        })(this.props)} />
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
