import React, { PropTypes } from 'react'
import { Button, Modal } from 'react-bootstrap'

const Confirm = ({title, body, onConfirm, onClose, show}) =>(
  <Modal show={show}>
    <Modal.Header>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{body}</Modal.Body>
    <Modal.Footer>
      <Button onClick={onClose}>Close</Button>
      <Button onClick={onConfirm} bsStyle='primary'>Confirm</Button>
    </Modal.Footer>
  </Modal>
)

Confirm.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
}

export default Confirm
