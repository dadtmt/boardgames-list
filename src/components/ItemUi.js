import React, {PropTypes} from 'react'
import { Button, FormGroup, Glyphicon } from 'react-bootstrap'

const ItemUi = ({uis}) => (
        <FormGroup>
          {uis.map(({glyph, buttonProps}, key) =>
            <Button
              type='button'
              key={key}
              {...buttonProps}
            >
              <Glyphicon glyph={glyph} />
            </Button>)}
        </FormGroup>
  )

ItemUi.propTypes = {
  uis: PropTypes.array.isRequired
}

export default ItemUi
