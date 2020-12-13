import React, { useState } from 'react'

import PropTypes from 'prop-types'
import { navigate } from 'hookrouter'
import { Tabs, Tab, Button, Row, Col } from 'react-bootstrap'

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
  return (
    <div>
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
            defaultActiveKey="general-info" 
            id="main-form-tabs" 
            onSelect={key => key === 'exports' ? setExportTabActivated(true) : setExportTabActivated(false)}
          >
            <Tab eventKey="general-info" title="Informações gerais">
              <br/>
              <GeneralInfo
                document={props.document}
                setDocument={props.setDocument}
                validated={props.validated}
                setValidated={props.setValidated}
              />
            </Tab>
            <Tab eventKey="elementos-pre-textuais" title="Elementos pré-textuais">
              <br/>
              <ElementosPreTextuais
                document={props.document}
                setDocument={props.setDocument}
                validated={props.validated}
                setValidated={props.setValidated}
              />
            </Tab>
            <Tab eventKey="elementos-textuais" title="Elementos textuais">
              <br/>
              <ElementosTextuais
                document={props.document}
                setDocument={props.setDocument}
                validated={props.validated}
                setValidated={props.setValidated}
              />
            </Tab>
            <Tab eventKey="elementos-pos-textuais" title="Elementos pós-textuais">
              <br/>
              <ElementosPosTextuais
                document={props.document}
                setDocument={props.setDocument}
                validated={props.validated}
                setValidated={props.setValidated}
              />
            </Tab>
            <Tab eventKey="exports" title="Exportar">
              <br/>
              <Exports
                document={props.document}
              />
            </Tab>
          </Tabs>
        </div>
      }
      {
        !isExportTabActivated &&
        <div>
          <br/>
          <Row>
            <Col className="text-center">
              <Button variant="info" onClick={() => navigate('/')}>
                Voltar
              </Button>
              &nbsp;
              <Button variant="success" onClick={() => save()}>
                Salvar
              </Button>
            </Col>
          </Row>
        </div>
      }
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
