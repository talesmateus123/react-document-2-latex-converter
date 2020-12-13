import React from 'react'

import PropTypes from 'prop-types'
import { Modal, Button } from 'react-bootstrap'
import { navigate } from 'hookrouter'

function SaveConfirmationModal(props) {

  const handleCloseModal = () => {
    props.setShowModal(false)
  }
  
  return (
    <span>
      <Modal 
        show={props.showModal}
        onHide={handleCloseModal}
        data-testid="modal"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Salvar
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Documento salvo com sucesso
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={() => navigate('/')} data-testid="btn-remove-task">
            Voltar ao início
          </Button>
          <Button variant="primary" onClick={handleCloseModal} data-testid="btn-close-modal">
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </span>
  )
}

SaveConfirmationModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired
}

export default SaveConfirmationModal;
