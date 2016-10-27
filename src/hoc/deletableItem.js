import React, { PropTypes } from 'react'
import { Button, FormGroup, Glyphicon } from 'react-bootstrap'

const deletableItem = WrappedComponent => {
  const DeletableItemWrapper = class extends React.Component {
    render() {
      return (
        <div>
          <FormGroup>
            <Button
              type='button'
              title='delete'
              onClick={this.props.onDelete}
              bsStyle='danger'
            >
              <Glyphicon glyph='trash' />
            </Button>
            </FormGroup>
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
