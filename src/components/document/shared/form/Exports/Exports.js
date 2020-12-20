import React, { useState } from 'react'
import './Exports.css'

import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArchive, faFilePdf, faFileAlt } from '@fortawesome/free-solid-svg-icons'

import DocumentService from '../../services/document.service'
import ExportConfirmationModal from './modals/ExportConfirmation/ExportConfirmation'

function Exports(props) {

  const [ status, setStatus ] = useState(null)
  const [ showModal, setShowModal ] = useState(false)  
  const { generateZippedDocument, generatePdfDocument, generateJsonDocument } = DocumentService({setStatus, setShowModal})

  return (
    <div>
      <div className="text-center main_div">
        <Button className="button" variant="dark" onClick={() => generateZippedDocument(props.document)}>
          <FontAwesomeIcon icon={faFileArchive} /> &nbsp;
          Projeto LaTeX
        </Button>
        &nbsp;
        <Button className="button" variant="dark" onClick={() => generatePdfDocument(props.document)}>
          <FontAwesomeIcon icon={faFilePdf} /> &nbsp;
          PDF
        </Button>
        &nbsp;
        <Button className="button" variant="dark" onClick={() => generateJsonDocument(props.document)}>
          <FontAwesomeIcon icon={faFileAlt} /> &nbsp;
          JSON
        </Button>
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
