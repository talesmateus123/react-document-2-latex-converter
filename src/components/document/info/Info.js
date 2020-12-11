import React, { useState, useEffect } from 'react'
import './Info.css'

import PropTypes from 'prop-types'
import { navigate } from 'hookrouter'

import MainForm from '../form/MainForm'
import DocumentStorageService from '../shared/services/document-storage.service'

function Info(props) {

  const [ getDocumentsStorage, setDocumentsStorage ] = DocumentStorageService()

  const [ document, setDocument ] = useState({})
  const [ validated, setValidated ] = useState(false)

  useEffect(() => {
    const getDocument = () => {
      const documentsList = getDocumentsStorage().filter(document => document.id === props.id)
      if (documentsList.length === 0)
        navigate("/")
      return documentsList[0]
    }

    if(Object.keys(document).length === 0 ) {
      setDocument(getDocument())
    }
  }, [ document, props, getDocumentsStorage ])

  const save = () => {
    const documents = getDocumentsStorage().map(arrayDocument => {
      if(arrayDocument.id === document.id) 
        return document
      return arrayDocument
    })
    setDocumentsStorage(documents)
    navigate('/')
  }
  
  return (
    <div>
      <h3 className="header">Informações do documento</h3>
      <MainForm
        document={document}
        setDocument={setDocument}
        validated={validated}
        setValidated={setValidated}
        save={save}
        isInfoForm={true}
      />
    </div>
  )
}


Info.propTypes = {
  id: PropTypes.number.isRequired
}

export default Info
