import React, { PropTypes } from 'react'
import { Button, Glyphicon } from 'react-bootstrap'

const deletableItem = WrappedComponent => {
  const DeletableItemWrapper = class extends React.Component {
    render() {
      return (
        <div>
          <Button
            type='button'
            title='delete'
            onClick={this.props.onDelete}
            bsStyle='danger'
          >
            <Glyphicon glyph='trash' />
          </Button>
          <WrappedComponent {...this.props} />
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
