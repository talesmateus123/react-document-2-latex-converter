import React from 'react'
import './ElementosPreTextuais.css'

import PropTypes from 'prop-types'
import { Form as F, Col } from 'react-bootstrap'

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
        
        <F.Row>
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
        </F.Row>
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
