import React, { useState } from 'react'
import './Editor.css'

import PropTypes from 'prop-types'
import { Form as F, Col, Button } from 'react-bootstrap'
import ReactQuill from 'react-quill'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { v4 as generateUniqueId } from 'uuid'

import Capitulo from '../../models/capitulo.model'
import RemoveChapterModal from './modals/RemoveChapter/RemoveChapter'
import EditChapterNameModal from './modals/EditChapterName/EditChapterName'

function Editor(props) {

  const [ currentChapterIndex, setCurrentChapterIndex ] = useState(0)
  const [ showRemoveModal, setShowRemoveModal ] = useState(false)
  const [ showEditNameModal, setShowEditNameModal ] = useState(false)

  const getButtonChapters = () => {
    if(props.chapters && props.chapters.length >= 1) {
      return (
        props.chapters.map((chapter, index) => (
          <span key={index}>
            <Button 
              variant={index === currentChapterIndex ? "dark" : "light"}
              className="btn-sm btn-block"
              onClick={() => handleChangeChapter(chapter.id)}
              onDoubleClick={() => setShowEditNameModal(true)}
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
    const chapNumber = props.chapters.length + 1
    const chapter = new Capitulo(generateUniqueId(), `Capítulo ${chapNumber}`)
    props.chapters.push(chapter)
    props.setChapters(props.chapters)
    currentChapterIndex === null && setCurrentChapterIndex(props.chapters.indexOf(chapter))
  }

  const handleRemoveChapter = () => {
    const chapters = props.chapters.filter((_, index) => index !== currentChapterIndex)
    if(chapters.length !== 0)
      setCurrentChapterIndex(0)
    props.setChapters(chapters)
  }

  const handleSetChapter = chapterToBeSetted => {
    const chapters = props.chapters.map(chapter => {
      if (chapterToBeSetted.id === chapter.id)
        return chapterToBeSetted
      return chapter
    })
    props.setChapters(chapters)
  }

  const handleChangeChapter = id => {
    const chapters = props.chapters.filter(chapter => chapter.id === id)
    if(chapters && chapters.length === 1)
      setCurrentChapterIndex(props.chapters.indexOf(chapters[0]))
  }

  const getEditor = () => {
    if(props.chapters) {
      return (
        props.chapters.map((chapter, index) => {
          if(currentChapterIndex !== null && currentChapterIndex === index) {
            return (
              <ReactQuill
                key={chapter.id}
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
      <F.Row>
        <Col md={4}>
          <F.Row md={10} style={{overflowY: ' auto', maxHeight: '250px'}}>
            {getButtonChapters()}
          </F.Row>
          <F.Row md={2}>
            <Button className="btn-sm" onClick={handleNewChapter}>
              <FontAwesomeIcon icon={faPlus} /> &nbsp; Novo capítulo
            </Button>
            &nbsp;
            <br/>
            <Button className="btn-sm" onClick={() => setShowRemoveModal(true)}>
              <FontAwesomeIcon icon={faMinus} /> &nbsp; Remover capítulo
            </Button>
          </F.Row>
        </Col>
        <Col md={8}>
          {getEditor()}
        </Col>
      </F.Row>
      {
        props.chapters && props.chapters.length >= 1 ? 
          <div>
            <RemoveChapterModal 
              handleRemoveChapter={handleRemoveChapter}
              showModal={showRemoveModal}
              setShowModal={setShowRemoveModal}
            />

            <EditChapterNameModal
              handleSetChapter={handleSetChapter}
              chapter={props.chapters[currentChapterIndex]}
              showModal={showEditNameModal}
              setShowModal={setShowEditNameModal}
            />
          </div>
        : null
      }
    </div>
  )
}

Editor.propTypes = {
  chapters: PropTypes.array,
  setChapters: PropTypes.func.isRequired,
  validated: PropTypes.bool.isRequired,
  setValidated: PropTypes.func.isRequired
}

export default Editor
