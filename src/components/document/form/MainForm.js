import React from 'react'

import PropTypes from 'prop-types'
import { Tabs, Tab } from 'react-bootstrap'

import GeneralInfo from './GeneralInfo/GeneralInfo'

function MainForm(props) {
  return (
    <div>
      <Tabs defaultActiveKey="general-info" id="uncontrolled-tab-example">
        <Tab eventKey="general-info" title="Informações gerais">
          <GeneralInfo
            document={props.document}
            setDocument={props.setDocument}
            validated={props.validated}
            setValidated={props.setValidated}
          />
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <p>Tab2</p>
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          <p>Tab2</p>
        </Tab>
      </Tabs>
    </div>
  )
}

MainForm.propTypes = {
  document: PropTypes.object.isRequired,
  setDocument: PropTypes.func.isRequired,
  validated: PropTypes.bool.isRequired,
  setValidated: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired
}

export default MainForm
