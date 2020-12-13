import React from 'react'
import './ElementosPreTextuais.css'

import PropTypes from 'prop-types'
import { Tabs, Tab } from 'react-bootstrap'

import Options from './Options/Options'
import Resumo from './Resumo/Resumo'
import Listas from './Listas/Listas'
import Others from './Others/Others'

function ElementosPreTextuais(props) {

  return (
    <div>
      <Tabs 
        defaultActiveKey="resumo" 
        id="elementos-pre-textuais-tabs"
      >
        <Tab eventKey="resumo" title="Resumo">
          <br/>
          <Resumo
            document={props.document}
            setDocument={props.setDocument}
            validated={props.validated}
            setValidated={props.setValidated}
          />
        </Tab>
        <Tab eventKey="lists" title="Listas">
          <br/>
          <Listas
            document={props.document}
            setDocument={props.setDocument}
            validated={props.validated}
            setValidated={props.setValidated}
          />
        </Tab>
        <Tab eventKey="others" title="Outros">
          <br/>
          <Others
            document={props.document}
            setDocument={props.setDocument}
            validated={props.validated}
            setValidated={props.setValidated}
          />
        </Tab>
        <Tab eventKey="options" title="Opções">
          <br/>
          <Options
            document={props.document}
            setDocument={props.setDocument}
            validated={props.validated}
            setValidated={props.setValidated}
          />
        </Tab>
      </Tabs>
    </div>
  )
}

ElementosPreTextuais.propTypes = {
  document: PropTypes.object.isRequired,
  setDocument: PropTypes.func.isRequired,
  validated: PropTypes.bool.isRequired,
  setValidated: PropTypes.func.isRequired
}

export default ElementosPreTextuais
