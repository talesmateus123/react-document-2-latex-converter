import React, { useState, useRef } from 'react'
import './MainForm.css'

import PropTypes from 'prop-types'
import { navigate } from 'hookrouter'
import { Form as F, Tabs, Tab, Button, Row, Col, Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faSave } from '@fortawesome/free-solid-svg-icons'

import GeneralInfo from './GeneralInfo/GeneralInfo'
import ElementosPreTextuais from './ElementosPreTextuais/ElementosPreTextuais'
import ElementosTextuais from './ElementosTextuais/ElementosTextuais'
import ElementosPosTextuais from './ElementosPosTextuais/ElementosPosTextuais'
import Exports from './Exports/Exports'
import SaveConfirmationModal from './modals/SaveConfirmation/SaveConfirmation'

function MainForm(props) {
  const [ errors, setErros ] = useState(null)
  const [ isExportTabActivated, setExportTabActivated ] = useState(false)
  const [ showModal, setShowModal ] = useState(false)
  const myRef = useRef(null)
  
  const save = () => {
    props.save()
    setShowModal(true)
  }

  const handleKeyDown = event => {
    if (event.ctrlKey && event.key === 's')
      handleSubmit(event)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setErros(null)
    const formErrors = []

    if(!props.document.titulo)
      formErrors.push({type: 'titulo', msg: <p>O campo <strong>Título</strong> é obrigatório</p>})

    if(!props.document.nomeAutor)
      formErrors.push({type: 'autor', msg: <p>O campo <strong>Autor</strong> é obrigatório</p>})
      

    if(formErrors.length > 0) {
      setErros(formErrors)
      return
    }

    save()
  }

  const getErrors = () => {
    if(errors && errors.length > 0) {
      myRef.current.scrollIntoView()
      return (
        <Alert variant="danger">
          <Alert.Heading>Erro de validação!</Alert.Heading>
          {errors.map(error => <span key={error.type}>{error.msg}</span>)}
        </Alert>
      )
    }
  }
  
  return (
    <F onKeyDown={handleKeyDown} onSubmit={handleSubmit}>
      <div ref={myRef}>
        {getErrors()}
      </div>
      
      {
        !props.isInfoForm ?
        <GeneralInfo
          document={props.document}
          setDocument={props.setDocument}
          validated={props.validated}
          setValidated={props.setValidated}
          errors={errors}
        />
        :
        <div>
          <Tabs 
            className="tabs"
            defaultActiveKey="general-info" 
            id="main-form-tabs" 
            onSelect={key => key === 'exports' ? setExportTabActivated(true) : setExportTabActivated(false)}
          >
            <Tab eventKey="general-info" title="Informações gerais" className="tab">
              <GeneralInfo
                document={props.document}
                setDocument={props.setDocument}
                validated={props.validated}
                setValidated={props.setValidated}
                errors={errors}
              />
            </Tab>
            <Tab eventKey="elementos-pre-textuais" title="Elementos pré-textuais" className="tab">
              <ElementosPreTextuais
                document={props.document}
                setDocument={props.setDocument}
                validated={props.validated}
                setValidated={props.setValidated}
              />
            </Tab>
            <Tab eventKey="elementos-textuais" title="Elementos textuais" className="tab">
              <ElementosTextuais
                document={props.document}
                setDocument={props.setDocument}
                validated={props.validated}
                setValidated={props.setValidated}
              />
            </Tab>
            <Tab eventKey="elementos-pos-textuais" title="Elementos pós-textuais" className="tab">
              <ElementosPosTextuais
                document={props.document}
                setDocument={props.setDocument}
                validated={props.validated}
                setValidated={props.setValidated}
              />
            </Tab>
            <Tab eventKey="exports" title="Exportar" className="tab">
              <Exports
                document={props.document}
              />
            </Tab>
          </Tabs>
        </div>
      }
      <Row>
        <Col className="text-left">
          <Button variant="light" onClick={() => navigate('/')}>
            <FontAwesomeIcon icon={faAngleLeft} /> &nbsp;
            Voltar
          </Button>
        </Col>
        <Col className="text-right">
          {
            !isExportTabActivated &&
            <Button variant="light" type="submit" >
              <FontAwesomeIcon icon={faSave} /> &nbsp;
              Salvar
            </Button>
          }
        </Col>
      </Row>
      <SaveConfirmationModal 
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </F>
  )
}

MainForm.propTypes = {
  document: PropTypes.object.isRequired,
  setDocument: PropTypes.func.isRequired,
  validated: PropTypes.bool.isRequired,
  setValidated: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  isInfoForm: PropTypes.bool.isRequired
}

export default MainForm
