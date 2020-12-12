import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Spinner, Alert } from 'react-bootstrap'

function ExportConfirmation(props) {

  const getBody = () => {
    if (!props.status) {
      return (
        <Spinner animation="border" role="status" className="text-center">
          <span className="sr-only">Gerando documento...</span>
        </Spinner>
      )
    }
    if(props.status.err) {
      return (
        <Alert variant="danger">
          <Alert.Heading>Opps, parece que ocorreu um problema...</Alert.Heading>
          <p>{ props.status.msg }</p>
        </Alert>
      )
    }

    return (
      <Alert variant="success">
        <Alert.Heading>Mensagem:</Alert.Heading>
        <p>{ props.status.msg }</p>
      </Alert>
    )
  }

  const handleCloseModal = () => {
    if(props.status) {
      props.setStatus(null)
      props.setShowModal(false)    
    }
  }
  
  return (
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
          {
            !props.status ?
            <p>Em progresso...</p>
            :
            props.status.err ?
            <p>Exportação falhou</p>
            :
            <p>Exportação completada</p>
          }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        { getBody() }
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={handleCloseModal} data-testid="btn-close-modal">
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

ExportConfirmation.propTypes = {
  status: PropTypes.object.isRequired,
  setStatus: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired
}

export default ExportConfirmation;
