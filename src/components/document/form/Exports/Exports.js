import React, { useState } from 'react'
import './Exports.css'

import PropTypes from 'prop-types'
import { Button, Row, Col, Alert } from 'react-bootstrap'

import DocumentService from '../../services/document.service'

function Exports(props) {

  const [ alert, setAlert ] = useState(null)
  const { generateZippedDocument, generatePdfDocument, generateJsonDocument } = DocumentService({setAlert})

  return (
    <div>
      <Alert variant={alert && alert.err ? 'danger' : 'success'} className={alert ? 'fadeIn' : 'fadeOut'}>
        <Alert.Heading>{alert && alert.err ? 'Erro!' : 'Sucesso!'}</Alert.Heading>
        <p>{ alert && alert.msg }</p>
      </Alert>

      <Row>
        <Col className="text-center">
          <Button onClick={() => generateZippedDocument(props.document)}>Projeto LaTeX</Button>
          &nbsp;
          <Button onClick={() => generatePdfDocument(props.document)}>Pdf</Button>
          &nbsp;
          <Button onClick={() => generateJsonDocument(props.document)}>Json</Button>
        </Col>
      </Row>
      <br/>
    </div>
  )
}

Exports.propTypes = {
  document: PropTypes.object.isRequired
}

export default Exports
