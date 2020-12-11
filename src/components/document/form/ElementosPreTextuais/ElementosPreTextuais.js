import React from 'react'
import './ElementosPreTextuais.css'

import PropTypes from 'prop-types'
import { Tabs, Tab } from 'react-bootstrap'

import Options from './Options'

function ElementosPreTextuais(props) {

  /*
    TODO: Is missing implementation of:
    textoAbstractX
    palavrasChaveAbstractX
    agradecimentos
    dedicatoria
    epigrafe
    fichaCatalograficaPalavrasChave
    preAmbulo
    textoResumo
    palavrasChaveResumo
    listaSiglas
    listaSimbolos
  */

  return (
    <div>
      <Tabs 
        defaultActiveKey="options" 
        id="elemsntos-pre-textuais-tabs"
      >
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
