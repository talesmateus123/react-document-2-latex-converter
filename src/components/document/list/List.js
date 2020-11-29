import React, { useState, useEffect } from 'react'
import './List.css'

import { A, navigate } from 'hookrouter'
import { Form, Button, Table, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons'

import DocumentStorageService from '../shared/services/document-storage.service'
import RemoveDocumentModal from '../modals/RemoveDocument/RemoveDocument'

function List() {

  const [ getDocumentsStorage ] = DocumentStorageService()

  const [ documents, setDocuments ] = useState([])
  const [ loadDocuments, setLoadDocuments ] = useState(true)
  const [ filter, setFilter ] = useState('')
  const [ currentId, setCurrentId ] = useState(0)
  const [ showModal, setShowModal ] = useState(false)

  useEffect(() => {
    if(loadDocuments) {
      let documentsStorage = getDocumentsStorage().filter(document => document.titulo.toLowerCase().indexOf(filter.toLowerCase()) === 0)
      setDocuments(documentsStorage)
      setLoadDocuments(false)
    }
  }, [ documents, loadDocuments, getDocumentsStorage, filter ])

  const populateDocumentsTable = () => {
    const documentsTable = documents.map(document => {
      return (
        <tr key={document.id}>
          <td>{document.titulo}</td>
          <td>{document.subTitulo}</td>
          <td className="text-center">
            <Button className="btn-sm btn-info" onClick={() => navigate(`/info/${document.id}`)} data-testid="btn-open-modal">
              <FontAwesomeIcon icon={faEdit} />
            </Button>
            &nbsp;
            <Button variant="danger" className="btn-sm" onClick={() => handleOpenRemoveModal(document.id)} data-testid="btn-open-modal">
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
      <h3 className="header">Meus documentos</h3>
      <Row>
        <Col sm={10}>
          <Form>
            <Form.Control value={filter} placeholder="Pesquisar" onChange={handleFilter} data-testid="form-control-filter"/>
          </Form>
        </Col>
        <Col sm={2} className="text-right">
          <A 
            href="/new" 
            className="btn btn-success btn-sm" 
            style={{width: '100%', height: '100%'}}
            data-testid="btn-new"
          >
            <FontAwesomeIcon icon={faPlus} />
            &nbsp;
            New task
          </A>
        </Col>
      </Row>

      <Row style={{paddingTop: 10}}>
        <Table
          striped bordered hover responsive data-testid="table"
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
              documents.length !== 0
              ? populateDocumentsTable() 
              : (
              <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            )}
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
