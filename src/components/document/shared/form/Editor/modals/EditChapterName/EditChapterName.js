import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Form } from 'react-bootstrap'

function EditChapterNameModal(props) {

  const [ title, setTitle ] = useState(null)

  useEffect(() => {
    setTitle(props.chapter.titulo)
  }, [ props.chapter.titulo ])

  const handleCloseModal = () => {
    props.setShowModal(false)
  }

  const handleEditChapterName = () => {
    props.handleSetChapter({ ...props.chapter, titulo: title })
    handleCloseModal()
  }

  const listenEnterKeyAndSend = event => {
    if(event.key === 'Enter')
      handleEditChapterName()
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
            Renomear capítulo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={event => event.preventDefault()}>
            <Form.Label>Título</Form.Label>
            <Form.Control 
              value={title || ''}
              onChange={event => setTitle(event.target.value)}
              onKeyDown={listenEnterKeyAndSend}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleCloseModal} data-testid="btn-close-modal">
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleEditChapterName} data-testid="btn-edit-chapter-name">
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </span>
  )
}

EditChapterNameModal.propTypes = {
  handleSetChapter: PropTypes.func.isRequired,
  chapter: PropTypes.object.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
}

export default EditChapterNameModal;
