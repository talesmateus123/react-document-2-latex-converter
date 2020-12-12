import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'react-bootstrap'

function RemoveChapterModal(props) {

  const handleCloseModal = () => {
    props.setShowModal(false)
  }

  const handleRemoveChapter = () => {
    props.handleRemoveChapter()
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
          Tem certeza que deseja excluir o capítulo?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleRemoveChapter} data-testid="btn-remove-chapter">
            Sim
          </Button>
          <Button variant="light" onClick={handleCloseModal} data-testid="btn-close-modal">
            Não
          </Button>
        </Modal.Footer>
      </Modal>
    </span>
  )
}

RemoveChapterModal.propTypes = {
  handleRemoveChapter: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
}

export default RemoveChapterModal;
