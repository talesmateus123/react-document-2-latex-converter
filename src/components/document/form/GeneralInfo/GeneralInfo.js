import React from 'react'
import './GeneralInfo.css'

import PropTypes from 'prop-types'
import { Form as F, Col } from 'react-bootstrap'
/*
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons'
*/

import NivelEscolarEnum from '../../shared/enums/nivel-escolar.enum'
import TipoTrabalhoEnum from '../../shared/enums/tipo-trabalho.enum'
import TituloAcademicoEnum from '../../shared/enums/titulo-academico.enum'

function GeneralInfo(props) {

  const FORM_ROWS = 2

  const setDocumentTitulo = event => {
    props.setDocument({ ...props.document, titulo: event.target.value})
  }

  const setDocumentSubTitulo = event => {
    props.setDocument({ ...props.document, subTitulo: event.target.value})
  }

  const setDocumentTitle = event => {
    props.setDocument({ ...props.document, title: event.target.value})
  }

  const setDocumentNomeCidade = event => {
    props.setDocument({ ...props.document, nomeCidade: event.target.value})
  }

  const setDocumentAno = event => {
    props.setDocument({ ...props.document, ano: parseInt(event.target.value)})
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

  const setDocumentNomeInstituicao = event => {
    props.setDocument({ ...props.document, nomeInstituicao: event.target.value})
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

  const setDocumentNomeAutor = event => {
    const nomeAutor = event.target.value
    props.setDocument({ ...props.document, nomeAutor})
  }

  const setDocumentNomeOrientador = event => {
    props.setDocument({ ...props.document, nomeOrientador: event.target.value})
  }

  const setDocumentNomeCoorientador = event => {
    props.setDocument({ ...props.document, nomeCoorientador: event.target.value})
  }

  const getNiveisEscolares = () => (
    Object.keys(NivelEscolarEnum).map(nivelEscolar => <option key={nivelEscolar} value={nivelEscolar}>{NivelEscolarEnum[nivelEscolar]}</option>)
  )

  const getTiposDeTrabalho = () => (
    Object.keys(TipoTrabalhoEnum).map(tipoTrabalho => <option key={tipoTrabalho} value={tipoTrabalho}>{TipoTrabalhoEnum[tipoTrabalho]}</option>)
  )

  const getTitulosAcademicos = () => (
    Object.keys(TituloAcademicoEnum).map(tituloAcademico => <option key={tituloAcademico} value={tituloAcademico}>{TituloAcademicoEnum[tituloAcademico]}</option>)
  )

  const filterLetters = event => {
    const pressedKey = event.key
    if(pressedKey.match(/^[a-zA-Z!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/) && pressedKey !== 'Backspace' && pressedKey !== 'Delete') {
      event.preventDefault()
      return
    }
  }

  return (
    <div>
      <F
        validated={props.validated}
        noValidate
        onSubmit={props.save}
      >
        <br/>
        <F.Row>
          <Col>
            <F.Group>
              <F.Label>Título</F.Label>
              <F.Control 
                as="textarea" 
                rows={FORM_ROWS}
                placeholder="Título"
                type="text"
                value={props.document.titulo || ''}
                onChange={setDocumentTitulo}
              />
            </F.Group>
          </Col>
          <Col>
            <F.Group>
              <F.Label>Sub título</F.Label>
              <F.Control 
                as="textarea" 
                rows={FORM_ROWS}
                placeholder="Sub título"
                value={props.document.subTitulo || ''}
                onChange={setDocumentSubTitulo}
              />
            </F.Group>
          </Col>
        </F.Row>

        <F.Row>
          <Col>
            <F.Group>
              <F.Label>Título em inglês</F.Label>
              <F.Control 
                as="textarea" 
                rows={FORM_ROWS}
                placeholder="Título em inglês"
                type="text"
                value={props.document.title || ''}
                onChange={setDocumentTitle}
              />
            </F.Group>
          </Col>
          <Col sm={3}>
            <F.Group>
              <F.Label>Cidade/Estado</F.Label>
              <F.Control 
                placeholder="Cidade/Estado"
                type="text"
                value={props.document.nomeCidade || ''}
                onChange={setDocumentNomeCidade}
              />
            </F.Group>
          </Col>
          <Col sm={3}>
            <F.Group>
              <F.Label>Ano</F.Label>
              <F.Control 
                placeholder="Ano"
                type="number"
                value={props.document.ano || ''}
                onKeyDown={filterLetters }
                onChange={setDocumentAno}
              />
            </F.Group>
          </Col>
        </F.Row>
        <F.Row>
          <Col>
            <F.Group>
              <F.Label>Tipo de documento</F.Label>
              <F.Control 
                  as="select"
                  value={props.document.tipoTrabalho || 'TCC'}
                  onChange={setDocumentTipoTrabalho}
                >
                  {getTiposDeTrabalho()}
              </F.Control>
            </F.Group>
          </Col>
          <Col>
            <F.Group>
              <F.Label>Título acadêmico</F.Label>
              <F.Control 
                as="select"
                value={props.document.tituloAcademico || 'BACHAREL'}
                onChange={setDocumentTituloAcademico}
              >
                {getTitulosAcademicos()}
              </F.Control>
            </F.Group>
          </Col>
        </F.Row>

        {
          props.document.tipoTrabalho !== 'TCC' ?
          <F.Row>
            <Col>
              <F.Group>
                <F.Label>Área de concentração</F.Label>
                <F.Control 
                  placeholder="Área de concentração"
                  type="text"
                  value={props.document.areaConcentracao || ''}
                  onChange={setDocumentAreaConcentracao}
                />
              </F.Group>
            </Col>
            <Col>
              <F.Group>
                <F.Label>Linha de pesquisa</F.Label>
                <F.Control 
                  placeholder="Linha de pesquisa"
                  type="text"
                  value={props.document.linhaPesquisa || ''}
                  onChange={setDocumentLinhaPesquisa}
                />
              </F.Group>
            </Col>
          </F.Row>
          : null
        }

        <hr/>

        <F.Row>
          <Col className="form-title">Informações da instituição</Col>
        </F.Row>
        <F.Row>
          <Col>
            <F.Group>
              <F.Control 
                placeholder="Nome"
                type="text"
                value={props.document.nomeInstituicao || ''}
                onChange={setDocumentNomeInstituicao}
              />
            </F.Group>
          </Col>
        </F.Row>
        <F.Row>
          <Col>
            <F.Group>
              <F.Control 
                placeholder="Sigla"
                type="text"
                value={props.document.siglaInstituicao || ''}
                onChange={setDocumentSiglaInstituicao}
              />
            </F.Group>
          </Col>
          <Col>
            <F.Group>
              <F.Control 
                placeholder="Campus"
                type="text"
                value={props.document.campusInstituicao || ''}
                onChange={setDocumentCampusInstituicao}
              />
            </F.Group>
          </Col> 
          {
            props.document.tipoTrabalho !== 'TCC' ?
            <Col>
              <F.Group>
                <F.Control 
                  placeholder="Departamento"
                  type="text"
                  value={props.document.departamentoInstituicao || ''}
                  onChange={setDocumentDepartamentoInstituicao}
                />
              </F.Group>
            </Col>
            : null
          }
        </F.Row>

        <hr/>

        <F.Row>
          <Col className="form-title">Informações do curso</Col>
        </F.Row>
        <F.Row>
          <Col>
            <F.Group>
              <F.Label>Nome</F.Label>
              <F.Control 
                placeholder="Nome"
                type="text"
                value={props.document.nomeCurso || ''}
                onChange={setDocumentNomeCurso}
              />
            </F.Group>
          </Col>
          <Col>
            <F.Group>
              <F.Label>Nível</F.Label>
              <F.Control 
                  as="select"
                  value={props.document.nivelEscolarCurso || 'SUPERIOR'}
                  onChange={setDocumentNivelEscolarCurso}
                >
                  {getNiveisEscolares()}
              </F.Control>
            </F.Group>
          </Col>
        </F.Row>

        <hr/>

        <F.Row>
          <Col className="form-title">Pessoas envolvidas</Col>
        </F.Row>
        <F.Row>
          <Col>
            <F.Group>
              <F.Label>Autor</F.Label>
              <F.Control 
                placeholder="Nome"
                value={props.document.nomeAutor || ''}
                onChange={setDocumentNomeAutor}
              />
            </F.Group>
          </Col>
          <Col>
            <F.Group>
              <F.Label>Orientador</F.Label>
              <F.Control 
                placeholder="Nome"
                value={props.document.nomeOrientador || ''}
                onChange={setDocumentNomeOrientador}
              />
            </F.Group>
          </Col>
          <Col>
            <F.Group>
              <F.Label>Coorientador</F.Label>
              <F.Control 
                placeholder="Nome"
                value={props.document.nomeCoorientador || ''}
                onChange={setDocumentNomeCoorientador}
              />
            </F.Group>
          </Col>
        </F.Row>
      </F>
    </div>
  )
}

GeneralInfo.propTypes = {
  document: PropTypes.object.isRequired,
  setDocument: PropTypes.func.isRequired,
  validated: PropTypes.bool.isRequired,
  setValidated: PropTypes.func.isRequired
}

export default GeneralInfo
