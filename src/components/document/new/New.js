import React, { useState } from 'react'
import './New.css'

import { navigate } from 'hookrouter'
import { Button, Row, Col } from 'react-bootstrap';

import DocumentStorageService from '../shared/services/document-storage.service'
import MainForm from '../form/MainForm'
import Document from '../shared/models/document.model'

function New() {

  const [ getDocumentsStorage, setDocumentsStorage ] = DocumentStorageService()

  const [ document, setDocument ] = useState(new Document())
  const [ validated, setValidated ] = useState(false)

  const save = () => {
    const documents = getDocumentsStorage()
    documents.push(document)
    setDocumentsStorage(documents)
    navigate('/')
  }

  return (
    <div>
      <h3 className="header">Novo documento</h3>

      <Row style={{paddingTop: 10}}>
        <Col>
          <MainForm
            document={document}
            setDocument={setDocument}
            validated={validated}
            setValidated={setValidated}
            save={save}
            isInfoForm={false}
          />
        </Col>
      </Row>
      
      <Row style={{paddingTop: 10}}>
        <Col className="text-right">
          <Button variant="info" onClick={() => navigate('/')}>
            Voltar
          </Button>
        </Col>
        <Col>
          <Button variant="success" onClick={save}>
            Salvar
          </Button>
        </Col>
       </Row>
    </div>
  )
}

export default New
