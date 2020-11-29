import React, { useState } from 'react'
import './ElementosTextuais.css'

import PropTypes from 'prop-types'
import { Form as F, Col, Button } from 'react-bootstrap'
import ReactQuill from 'react-quill'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import Capitulo from '../../shared/models/capitulo.model'

function ElementosPreTextuais(props) {

  const [ currentChapterIndex, setCurrentChapterIndex ] = useState(0)

  const getButtonChapters = () => {
    if(props.document.capitulos && props.document.capitulos.length >= 1) {
      return (
        props.document.capitulos.map((chapter, index) => (
          <span>
            <Button 
              variant={index === currentChapterIndex ? "dark" : "light"}
              className="btn-sm btn-chapter"
              key={index}
              onClick={() => handleChangeChapter(chapter.id)}
              onDoubleClick={() => console.log('double click')}
            >
              {chapter.titulo}
            </Button>
            <br/>
          </span>
        ))
      )
    }
  }

  const handleNewChapter = () => {
    const chapNumber = props.document.capitulos.length + 1
    const chapter = new Capitulo(null, `Capítulo ${chapNumber}`)
    props.document.capitulos.push(chapter)
    props.setDocument({ ...props.document, capitulos: props.document.capitulos })
    !currentChapterIndex && setCurrentChapterIndex(props.document.capitulos.indexOf(chapter))
  }

  const handleDeleteChapter = () => {
    const chapters = props.document.capitulos.filter((_, index) => index !== currentChapterIndex)
    if(chapters.length !== 0)
      setCurrentChapterIndex(0)
    props.setDocument({ ...props.document, capitulos: chapters })
  }

  const handleSetChapter = chapterToBeSetted => {
    const chapters = props.document.capitulos.map(chapter => {
      if (chapterToBeSetted.id === chapter.id)
        return chapterToBeSetted
      return chapter
    })
    props.setDocument({ ...props.document, capitulos: chapters })
  }

  const handleChangeChapter = id => {
    const chapters = props.document.capitulos.filter(chapter => chapter.id === id)
    if(chapters && chapters.length === 1)
      setCurrentChapterIndex(props.document.capitulos.indexOf(chapters[0]))
  }

  const getEditor = () => {
    if(props.document.capitulos) {
      return (
        props.document.capitulos.map((chapter, index) => {
          if (currentChapterIndex !== null && currentChapterIndex === index) {
            return (
              <ReactQuill
                value={chapter.body}
                onChange={body => handleSetChapter({ ...chapter, body })}
              />
            )
          }
          return null
        })
      )
    }
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

          </Col>
        </F.Row>
        <F.Row>
          <Col md={2}>
            <F.Row md={10}>
              {getButtonChapters()}
            </F.Row>
            <F.Row md={2}>
              <Button 
                className="btn-sm"
                onClick={handleNewChapter}
              >
                <FontAwesomeIcon icon={faPlus} />
                &nbsp;
                Novo capítulo
              </Button>
              <Button 
                className="btn-sm"
                onClick={() => handleDeleteChapter()}
              >
                <FontAwesomeIcon icon={faMinus} />
                &nbsp;
                Remover capítulo
              </Button>
            </F.Row>
          </Col>
          <Col md={10}>
            <F.Group>
              {getEditor()}
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
