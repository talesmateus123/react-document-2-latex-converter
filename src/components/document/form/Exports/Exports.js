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
      {
        alert &&
        <Alert variant={alert.err ? 'danger' : 'success'}>
          <Alert.Heading>{alert.err ? 'Erro!' : 'Sucesso!'}</Alert.Heading>
          <p>{ alert.msg }</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setAlert(null)} variant={alert.err ? 'outline-danger' : 'outline-success'}>
              Fechar
            </Button>
          </div>
        </Alert>
      }
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
