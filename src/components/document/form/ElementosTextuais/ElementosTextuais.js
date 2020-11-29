import React from 'react'
import './ElementosTextuais.css'

import PropTypes from 'prop-types'

import Editor from '../Editor/Editor'

function ElementosPreTextuais(props) {
  
  const setChapters = chapters => {
    props.setDocument({ ...props.document, capitulos: chapters })
  }

  return (
    <Editor
      chapters={props.document.capitulos}
      setChapters={setChapters}
      validated={props.validated}
      setValidated={props.setValidated}
    />
  )
}

ElementosPreTextuais.propTypes = {
  document: PropTypes.object.isRequired,
  setDocument: PropTypes.func.isRequired,
  validated: PropTypes.bool.isRequired,
  setValidated: PropTypes.func.isRequired
}

export default ElementosPreTextuais
