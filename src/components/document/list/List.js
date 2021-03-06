import React, { useState, useEffect } from 'react'
import './List.css'

import { navigate } from 'hookrouter'
import { Form, Button, Table, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons'

import DocumentStorageService from '../shared/services/document-storage.service'
import RemoveDocumentModal from './modals/RemoveDocument/RemoveDocument';

function List() {

  const [ getDocumentsStorage ] = DocumentStorageService()

  const [ title ] = useState('Meus documentos')
  const [ documents, setDocuments ] = useState([])
  const [ loadDocuments, setLoadDocuments ] = useState(true)
  const [ filter, setFilter ] = useState('')
  const [ currentId, setCurrentId ] = useState(null)
  const [ showModal, setShowModal ] = useState(false)

  useEffect(() => {
    if(loadDocuments) {
      let documentsStorage = getDocumentsStorage().filter(document => document.titulo.toLowerCase().indexOf(filter.toLowerCase()) === 0)
      setDocuments(documentsStorage)
      setLoadDocuments(false)
    }
    document.title = title
  }, [ documents, loadDocuments, getDocumentsStorage, filter, title ])

  const populateDocumentsTable = () => {
    const documentsTable = documents.map(document => {
      return (
        <tr key={document.id}>
          <td className="title">{document.titulo}</td>
          <td className="sub_title">{document.subTitulo}</td>
          <td className="text-center">
            <Button className="btn-sm btn-info" onClick={() => navigate(`/info/${document.id}`)} data-testid="btn-info-page">
              <FontAwesomeIcon icon={faEdit} />
            </Button>
            &nbsp;
            <Button variant="danger" className="btn-sm" onClick={() => handleOpenRemoveModal(document.id)} data-testid="btn-open-remove-modal">
              <FontAwesomeIcon icon={faTrashAlt} />
            </Button>
          </td>
        </tr>
      )
    })
    return documentsTable
  }

  const handleFilter = event => {
    setFilter(event.target.value)
    setLoadDocuments(true)
  }

  const handleOpenRemoveModal = id => {
    setCurrentId(id)
    setShowModal(true)
  }

  return (
    <div>
      <h3 className="header">{title}</h3>
      <Row>
        <Col sm={9} style={{paddingBottom: '5px'}}>
          <Form.Control value={filter} placeholder="Pesquisar" onChange={handleFilter} data-testid="form-control-filter"/>
        </Col>
        <Col sm={3} className="text-right">
          <Button
            variant="dark"
            className="btn-sm" 
            style={{height: '38px', width: '100%'}}
            data-testid="btn-new"
            onClick={() => navigate('/new')}
          >
            <FontAwesomeIcon icon={faPlus} />
            &nbsp;
            Novo documento
          </Button>
        </Col>
      </Row>

      <Row style={{paddingTop: 10}}>
        <Table
          striped hover responsive data-testid="table"
        >
          <thead>
            <tr>
              <th>Título</th>
              <th>Subtítulo</th>
              <th className="text-center">...</th>
            </tr>
          </thead>
          <tbody>
            {
              documents.length !== 0 &&
              populateDocumentsTable() 
              
            }
          </tbody>
        </Table>
      </Row>
      <RemoveDocumentModal
        id={currentId}
        setLoadDocuments={setLoadDocuments}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  )
}

export default List
