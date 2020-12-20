import React, { useState, useEffect } from 'react'
import './Info.css'

import PropTypes from 'prop-types'
import { navigate } from 'hookrouter'

import DocumentStorageService from '../shared/services/document-storage.service'
import MainForm from '../shared/form/MainForm'

function Info(props) {

  const [ getDocumentsStorage, setDocumentsStorage ] = DocumentStorageService()

  const [ documentX, setDocumentX ] = useState({})
  const [ validated, setValidated ] = useState(false)

  useEffect(() => {
    const getDocument = () => {
      const documentsList = getDocumentsStorage().filter(documentX => documentX.id === props.id)
      if (documentsList.length === 0)
        navigate("/")
      document.title = documentsList[0].titulo
      return documentsList[0]
    }

    if(Object.keys(documentX).length === 0 ) {
      setDocumentX(getDocument())
    }
  }, [ documentX, props, getDocumentsStorage ])

  const save = () => {
    const documents = getDocumentsStorage().map(arrayDocument => {
      if(arrayDocument.id === documentX.id) 
        return documentX
      return arrayDocument
    })
    setDocumentsStorage(documents)
  }
  
  return (
    <div>
      <h3 className="header">Informações do documento</h3>
      <MainForm
        document={documentX}
        setDocument={setDocumentX}
        validated={validated}
        setValidated={setValidated}
        save={save}
        isInfoForm={true}
      />
    </div>
  )
}


Info.propTypes = {
  id: PropTypes.string.isRequired
}

export default Info
