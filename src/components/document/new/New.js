import React, { useState } from 'react'
import './New.css'

import { navigate } from 'hookrouter'
import { Form as F, Button, Row, Col, Tabs, Tab } from 'react-bootstrap';
/*
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons'
*/

// import DocumentStorageService from '../services/document-storage.service'
import MainForm from '../form/MainForm'
import Document from '../shared/models/document.model'

function New() {

  // const [ getDocumentsStorage, setDocumentsStorage ] = DocumentStorageService()

  const [ document, setDocument ] = useState(new Document())
  const [ validated, setValidated ] = useState(false)

  const save = () => {
    console.log(document)
    // setDocumentsStorage(getDocumentsStorage.append(document))
    // navigate('/')
  }

  return (
    <div>
      <h3 className="header">Novo documento: 
        {document.titulo}
      </h3>
      <Row>
        <Col sm={10}>
          
        </Col>
        <Col sm={2} className="text-right">
          
        </Col>
      </Row>

      <Row style={{paddingTop: 10}}>
        <Col>
          <MainForm
            document={document}
            setDocument={setDocument}
            validated={validated}
            setValidated={setValidated}
            save={save}
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
