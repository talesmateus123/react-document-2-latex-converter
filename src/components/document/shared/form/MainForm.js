import React, { useState } from 'react'
import './MainForm.css'

import PropTypes from 'prop-types'
import { navigate } from 'hookrouter'
import { Tabs, Tab, Button, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faSave } from '@fortawesome/free-solid-svg-icons'

import GeneralInfo from './GeneralInfo/GeneralInfo'
import ElementosPreTextuais from './ElementosPreTextuais/ElementosPreTextuais'
import ElementosTextuais from './ElementosTextuais/ElementosTextuais'
import ElementosPosTextuais from './ElementosPosTextuais/ElementosPosTextuais'
import Exports from './Exports/Exports'
import SaveConfirmationModal from './modals/SaveConfirmation/SaveConfirmation'

function MainForm(props) {

  const [ isExportTabActivated, setExportTabActivated ] = useState(false)
  const [ showModal, setShowModal ] = useState(false)

  const save = () => {
    props.save()
    setShowModal(true)
  }

  const getSaveButton = () => (
    <Button variant="light" onClick={() => save()}>
      <FontAwesomeIcon icon={faSave} /> &nbsp;
      Salvar
    </Button>
  )

  const handleKeyDown = event => {
    if (event.ctrlKey && event.key === 's') {
      event.preventDefault()
      save()
    } 
  }
  
  return (
    <div onKeyDown={handleKeyDown}>
      {
        !props.isInfoForm ?
        <GeneralInfo
          document={props.document}
          setDocument={props.setDocument}
          validated={props.validated}
          setValidated={props.setValidated}
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
            getSaveButton()
          }
        </Col>
      </Row>
      <SaveConfirmationModal 
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
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
