import React, { useState } from 'react'
import './New.css'

import { navigate } from 'hookrouter'

import DocumentStorageService from '../shared/services/document-storage.service'
import MainForm from '../shared/form/MainForm'
import Document from '../shared/models/document.model'
import { v4 as generateUniqueId } from 'uuid'

function New() {

  const [ getDocumentsStorage, setDocumentsStorage ] = DocumentStorageService()

  const [ document, setDocument ] = useState(new Document(generateUniqueId()))
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
      <MainForm
        document={document}
        setDocument={setDocument}
        validated={validated}
        setValidated={setValidated}
        save={save}
        isInfoForm={false}
      />
    </div>
  )
}

export default New
