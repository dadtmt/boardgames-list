import React, {PropTypes} from 'react'
import { Button, ButtonToolbar, Glyphicon } from 'react-bootstrap'

const ItemUi = ({uis}) => (
        <ButtonToolbar>
          {uis.map(({glyph, buttonProps}, key) =>
            <Button
              type='button'
              key={key}
              {...buttonProps}
            >
              <Glyphicon glyph={glyph} />
            </Button>)}
        </ButtonToolbar>
  )

ItemUi.propTypes = {
  uis: PropTypes.array.isRequired
}

export default ItemUi
