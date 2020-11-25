import React from 'react'
import './ElementosPreTextuais.css'

import PropTypes from 'prop-types'
import { Form as F, Row, Col } from 'react-bootstrap'
/*
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons'
*/

function ElementosPreTextuais(props) {

  const setDocumentTitulo = event => {
    props.setDocument({ ...props.document, titulo: event.target.value})
  }

  return (
    <div>
      <F
        validated={props.validated}
        noValidate
        onSubmit={props.save}
      >
        <Row>
          <Col className="form-title">Informações do autor</Col>
        </Row>
        <Row>
          <Col className="form-title">Informações do Documento</Col>
        </Row>
        <Row>
          <Col>
            <F.Group>
              <F.Control 
                placeholder="Título"
                type="text"
                value={props.document.titulo || ''}
                onChange={setDocumentTitulo}
              />
            </F.Group>
          </Col>
        </Row>
      </F>
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
