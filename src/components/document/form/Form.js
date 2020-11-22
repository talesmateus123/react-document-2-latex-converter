import React from 'react'
import './Form.css'

import PropTypes from 'prop-types'
import { Form as F, Row, Col } from 'react-bootstrap'
/*
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons'
*/

function Form(props) {

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
      <Row>
        <Col className="form-title">Informações do autor</Col>
      </Row>
      <Row>
        <Col sm={6}>
          <F.Group>
            <F.Control 
              placeholder="Nome"
              value={props.document.nomeAutor || ''}
              onChange={event => setDocumentNomeAutor(event)}
            />
          </F.Group>
        </Col>
        <Col sm={6}>
          <F.Group>
            <F.Control 
              placeholder="Sobrenome"
              value={props.document.nomeAutor || ''}
              onChange={event => setDocumentSobrenomeAutor(event)}
            />
          </F.Group>
        </Col>
      </Row>
      <hr/>
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
          <F.Group>
            <F.Control 
              placeholder="Sub título"
              value={props.document.subTitulo || ''}
              onChange={event => setDocumentSubTitulo(event)}
            />
          </F.Group>
          <F.Group>
            <F.Control 
              placeholder="Título em inglês"
              type="text"
              value={props.document.title || ''}
              onChange={event => setDocumentTitle(event)}
            />
          </F.Group>
          <F.Group>
            <F.Control 
              placeholder="Cidade"
              type="text"
              value={props.document.nomeCidade || ''}
              onChange={event => setDocumentNomeCidade(event)}
            />
          </F.Group>
          <F.Group>
            <F.Control 
              placeholder="Ano"
              type="number"
              value={props.document.ano || ''}
              onChange={event => setDocumentAno(event)}
            />
          </F.Group>
          <F.Group>
            <F.Control 
              placeholder="Data aprovação"
              type="date"
              value={props.document.dataAprovacao || ''}
              onChange={event => setDocumentDataAprovacao(event)}
            />
          </F.Group>
        </Col>
      </Row>
    </div>
  )
}

Form.propTypes = {
  document: PropTypes.object.isRequired,
  setDocument: PropTypes.func.isRequired
}

export default Form
