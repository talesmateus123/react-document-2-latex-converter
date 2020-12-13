import React from 'react'
import './ElementosPreTextuais.css'

import PropTypes from 'prop-types'
import { Tabs, Tab } from 'react-bootstrap'

import Options from './Options/Options'
import Resumo from './Resumo/Resumo'

function ElementosPreTextuais(props) {

  /*
    TODO: Is missing implementation of:
    agradecimentos
    dedicatoria
    epigrafe
    fichaCatalograficaPalavrasChave
    preAmbulo
    listaSiglas
    listaSimbolos
  */

  return (
    <div>
      <Tabs 
        defaultActiveKey="resumo" 
        id="elementos-pre-textuais-tabs"
      >
        <Tab eventKey="resumo" title="Resumo">
          <Resumo
            document={props.document}
            setDocument={props.setDocument}
            validated={props.validated}
            setValidated={props.setValidated}
          />
          <br/>
        </Tab>
        <Tab eventKey="lists" title="Listas">
          <br/>
        </Tab>
        <Tab eventKey="others" title="Outros">
          <br/>
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
