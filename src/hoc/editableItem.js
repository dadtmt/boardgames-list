import React, { PropTypes } from 'react'
import { addUi } from './ui'

const editableItem = WrappedComponent => {
  const EditableItemWrapper = class extends React.Component {
    render() {
      return (
        <WrappedComponent {...addUi({
          glyph: 'pencil',
          buttonProps:{
            title: 'edit',
            bsStyle: 'info',
            onClick: this.props.onEdit
          }
        })(this.props)} />
      )
    }
  }
  EditableItemWrapper.propTypes = {
    onEdit: PropTypes.func.isRequired
  }
  EditableItemWrapper.displayName = 'EditableItemWrapper_' + WrappedComponent.displayName
  return EditableItemWrapper
}
export default editableItem
