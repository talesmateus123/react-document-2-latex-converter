import React from 'react'

import PropTypes from 'prop-types'
import { Tabs, Tab } from 'react-bootstrap'

import GeneralInfo from './GeneralInfo/GeneralInfo'
import ElementosPreTextuais from './ElementosPreTextuais/ElementosPreTextuais'

function MainForm(props) {
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
        <Tabs defaultActiveKey="general-info" id="main-form-tabs">
          <Tab eventKey="general-info" title="Informações gerais">
            <GeneralInfo
              document={props.document}
              setDocument={props.setDocument}
              validated={props.validated}
              setValidated={props.setValidated}
            />
          </Tab>
          <Tab eventKey="elementos-pre-textuais" title="Elementos pré-textuais">
            <ElementosPreTextuais
              document={props.document}
              setDocument={props.setDocument}
              validated={props.validated}
              setValidated={props.setValidated}
            />
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            <p>Tab2</p>
          </Tab>
        </Tabs>
      }
      
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
