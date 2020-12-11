import React from 'react'
import './Exports.css'

import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

import DocumentService from '../../services/document.service'

function Exports(props) {
  const { generateZippedDocument, generatePdfDocument, generateJsonDocument } = DocumentService

  return (
    <div>
      <Button onClick={() => generateZippedDocument(props.document)}>Zip</Button>
      <Button onClick={() => generatePdfDocument(props.document)}>Pdf</Button>
      <Button onClick={() => generateJsonDocument(props.document)}>Json</Button>
    </div>
  )
}

Exports.propTypes = {
  document: PropTypes.object.isRequired
}

export default Exports
