import React, { useState } from 'react'
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

  const [ document, setDocument ] = useState(new Document(generateUniqueId()))
  const [ validated, setValidated ] = useState(false)
  const [ showModal, setShowModal ] = useState(false)

  const save = () => {
    const documents = getDocumentsStorage()
    documents.push(document)
    setDocumentsStorage(documents)
    navigate('/')
  }

  const handleOpenModal = () =>{
    setShowModal(true)
  }

  return (
    <div>
      <h3 className="header">Novo documento &nbsp; <Button size="sm" variant="outline-dark" onClick={handleOpenModal}>Importar</Button></h3>
      <MainForm
        document={document}
        setDocument={setDocument}
        validated={validated}
        setValidated={setValidated}
        save={save}
        isInfoForm={false}
      />
      <ImportDocumentModal
        document={document}
        setDocument={setDocument}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  )
}

export default New
