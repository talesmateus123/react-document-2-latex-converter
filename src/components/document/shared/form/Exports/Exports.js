import React, { useState } from 'react'
import './Exports.css'

import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

import DocumentService from '../../services/document.service'
import ExportConfirmationModal from './modals/ExportConfirmation/ExportConfirmation'

function Exports(props) {

  const [ status, setStatus ] = useState(null)
  const [ showModal, setShowModal ] = useState(false)  
  const { generateZippedDocument, generatePdfDocument, generateJsonDocument } = DocumentService({setStatus, setShowModal})

  return (
    <div>
      <div className="text-center">
        <Button onClick={() => generateZippedDocument(props.document)}>Projeto LaTeX</Button>
        &nbsp;
        <Button onClick={() => generatePdfDocument(props.document)}>Pdf</Button>
        &nbsp;
        <Button onClick={() => generateJsonDocument(props.document)}>Json</Button>
      </div>
      <br/>

      <ExportConfirmationModal
        status={status}
        setStatus={setStatus}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  )
}

Exports.propTypes = {
  document: PropTypes.object.isRequired
}

export default Exports
