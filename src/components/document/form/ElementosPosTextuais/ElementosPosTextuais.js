import React from 'react'
import './ElementosPosTextuais.css'

import PropTypes from 'prop-types'
import { Tabs, Tab } from 'react-bootstrap'

import Editor from '../Editor/Editor'

function ElementosPosTextuais(props) {
  
  const setApendices = chapters => {
    props.setDocument({ ...props.document, apendices: chapters })
  }

  const setAnexos = chapters => {
    props.setDocument({ ...props.document, anexos: chapters })
  }

  return (
    <Tabs defaultActiveKey="apencices" id="main-form-tabs">
      <Tab eventKey="apencices" title="Apêncices">
        <br/>
        <Editor
          chapters={props.document.apendices}
          setChapters={setApendices}
          validated={props.validated}
          setValidated={props.setValidated}
        />
      </Tab>
      <Tab eventKey="anexos" title="Anexos">
        <br/>
        <Editor
          chapters={props.document.anexos}
          setChapters={setAnexos}
          validated={props.validated}
          setValidated={props.setValidated}
        />
      </Tab>
    </Tabs>
  )
}

ElementosPosTextuais.propTypes = {
  document: PropTypes.object.isRequired,
  setDocument: PropTypes.func.isRequired,
  validated: PropTypes.bool.isRequired,
  setValidated: PropTypes.func.isRequired
}

export default ElementosPosTextuais
