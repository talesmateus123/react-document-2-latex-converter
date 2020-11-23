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

  const setDocumentSubTitulo = event => {
    props.setDocument({ ...props.document, subTitulo: event.target.value})
  }

  const setDocumentTitle = event => {
    props.setDocument({ ...props.document, title: event.target.value})
  }

  const setDocumentNomeAutor = event => {
    props.setDocument({ ...props.document, nomeAutor: event.target.value})
  }

  const setDocumentSobrenomeAutor = event => {
    props.setDocument({ ...props.document, sobrenomeAutor: event.target.value})
  }

  const setDocumentNomeCidade = event => {
    props.setDocument({ ...props.document, nomeCidade: event.target.value})
  }

  const setDocumentAno = event => {
    props.setDocument({ ...props.document, ano: event.target.value})
  }

  const setDocumentDataAprovacao = event => {
    props.setDocument({ ...props.document, dataAprovacao: event.target.value})
  }

  const setDocumentTipoTrabalho = event => {
    props.setDocument({ ...props.document, tipoTrabalho: event.target.value})
  }

  const setDocumentTituloAcademico = event => {
    props.setDocument({ ...props.document, tituloAcademico: event.target.value})
  }

  const setDocumentAreaConcentracao = event => {
    props.setDocument({ ...props.document, areaConcentracao: event.target.value})
  }

  const setDocumentLinhaPesquisa = event => {
    props.setDocument({ ...props.document, linhaPesquisa: event.target.value})
  }

  const setDocumentSiglaInstituicao = event => {
    props.setDocument({ ...props.document, siglaInstituicao: event.target.value})
  }

  const setDocumentCampusInstituicao = event => {
    props.setDocument({ ...props.document, campusInstituicao: event.target.value})
  }

  const setDocumentDepartamentoInstituicao = event => {
    props.setDocument({ ...props.document, departamentoInstituicao: event.target.value})
  }

  const setDocumentNomeCurso = event => {
    props.setDocument({ ...props.document, nomeCurso: event.target.value})
  }

  const setDocumentNivelEscolarCurso = event => {
    props.setDocument({ ...props.document, nivelEscolarCurso: event.target.value})
  }

  const setDocumentNomeOrientador = event => {
    props.setDocument({ ...props.document, nomeOrientador: event.target.value})
  }

  const setDocumentSobrenomeOrientador = event => {
    props.setDocument({ ...props.document, sobrenomeOrientador: event.target.value})
  }

  const setDocumentNomeCoorientador = event => {
    props.setDocument({ ...props.document, nomeCoorientador: event.target.value})
  }

  const setDocumentSobrenomeCoorientador = event => {
    props.setDocument({ ...props.document, sobrenomeCoorientador: event.target.value})
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
                onChange={event => setDocumentTitulo(event)}
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
