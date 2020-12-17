import React, { useState } from 'react'

import PropTypes from 'prop-types'
import { Form as F, Modal, Button } from 'react-bootstrap'
import { v4 as generateUniqueId } from 'uuid'

function ImportDocumentModal(props) {

  const [ file, setFile ] = useState(null)

  const handleCloseModal = () => {
    props.setShowModal(false)
  }
  const handleImportDocument = () => {
    var reader = new FileReader()
    reader.readAsText(file, "UTF-8")
    reader.onload = evt => {
      JSON.parse(evt.target.result)
      console.log({ ...JSON.parse(evt.target.result), id: generateUniqueId() })
      props.setDocument({...JSON.parse(evt.target.result), id: generateUniqueId() })
    }
    reader.onerror = evt => {
      alert('Ocorreu um erro ao ler o arquivo.')
    }
    handleCloseModal()
  }

  const handleSetFile = event => {
    setFile(event.target.files[0])
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
            Importar Documento
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <F>
            <F.Group>
              <F.File name="file" accept=".json" label="Selecione o arquivo JSON" onChange={handleSetFile}/>
            </F.Group>
          </F>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleCloseModal} data-testid="btn-close-modal">
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleImportDocument} data-testid="btn-remove-task">
            Importar
          </Button>
        </Modal.Footer>
      </Modal>
    </span>
  )
}

ImportDocumentModal.propTypes = {
  document: PropTypes.object.isRequired,
  setDocument: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired
}

export default ImportDocumentModal;
