import React, { useState, useEffect } from 'react'
import './Info.css'

import { navigate } from 'hookrouter'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap';
/*
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons'
*/

import DocumentStorageService from '../services/document-storage.service'

function Info(props) {

  const [ getDocumentsStorage ] = DocumentStorageService()

  const [ document, setDocument ] = useState(null)

  useEffect(() => {
    const getDocument = () => {
      const documentsList = getDocumentsStorage().filter(document => document.id === props.id)
      if (documentsList.length === 0)
        navigate("/")
      return documentsList[0]
    }

    if(!document) {
      setDocument(getDocument())
    }
  }, [ document, props ])

 
  return (
    <div>
      <h3>Informações do documento</h3>
      <Row>
        <Col sm={10}>
          
        </Col>
        <Col sm={2} className="text-right">
          
        </Col>
      </Row>

      <Row style={{paddingTop: 10}}>
       
      </Row>
    </div>
  )
}


Info.propTypes = {
  id: PropTypes.number.isRequired
}

export default Info
