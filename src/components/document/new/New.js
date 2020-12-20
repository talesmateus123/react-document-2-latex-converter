import React, { useState, useEffect } from 'react'
import './New.css'

import { navigate } from 'hookrouter'
import { Button } from 'react-bootstrap'
import { v4 as generateUniqueId } from 'uuid'

import DocumentStorageService from '../shared/services/document-storage.service'
import MainForm from '../shared/form/MainForm'
import Document from '../shared/models/document.model'
import ImportDocumentModal from './modals/ImportDocument/ImportDocument'

function New() {

  const [ getDocumentsStorage, setDocumentsStorage ] = DocumentStorageService()

  const [ title ] = useState('Novo documento')
  const [ documentX, setDocumentX ] = useState(new Document(generateUniqueId()))
  const [ validated, setValidated ] = useState(false)
  const [ showModal, setShowModal ] = useState(false)

  useEffect(() => {
    document.title = title
  }, [ title ])

  const save = () => {
    const documents = getDocumentsStorage()
    documents.push(documentX)
    setDocumentsStorage(documents)
    navigate('/')
  }

  const handleOpenModal = () =>{
    setShowModal(true)
  }

  return (
    <div>
      <h3 className="header">{title} &nbsp; <Button size="sm" variant="outline-dark" onClick={handleOpenModal}>Importar</Button></h3>
      <MainForm
        document={documentX}
        setDocument={setDocumentX}
        validated={validated}
        setValidated={setValidated}
        save={save}
        isInfoForm={false}
      />
      <ImportDocumentModal
        document={documentX}
        setDocument={setDocumentX}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  )
}

export default New
