import React from 'react'

import PropTypes from 'prop-types'
import { Modal, Button } from 'react-bootstrap'

import DocumentStorageService from '../../../shared/services/document-storage.service'

function RemoveDocumentModal(props) {

  const [ getDocumentsStorage, setDocumentsStorage ] = DocumentStorageService()

  const handleCloseModal = () => {
    props.setShowModal(false)
  }
  const handleRemoveTask = () => {
    const documents = getDocumentsStorage().filter(document => document.id !== props.id)
    setDocumentsStorage(documents)
    props.setLoadDocuments(true)
    handleCloseModal()
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
            Excluir
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza que deseja excluir o documento?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleCloseModal} data-testid="btn-close-modal">
            Não
          </Button>
          <Button variant="danger" onClick={handleRemoveTask} data-testid="btn-remove-task">
            Sim
          </Button>
        </Modal.Footer>
      </Modal>
    </span>
  )
}

RemoveDocumentModal.propTypes = {
  id: PropTypes.string,
  setLoadDocuments: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired
}

export default RemoveDocumentModal;
