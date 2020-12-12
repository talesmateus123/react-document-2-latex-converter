import React from 'react'
import './Editor.css'

import PropTypes from 'prop-types'
import { Form as F, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp as upIcon, faCaretDown as downIcon } from '@fortawesome/free-solid-svg-icons'

function ChapterButton(props) {
  return (
    <span>
      <F.Row>
        <Col>
          <Button 
              variant={props.active ? "dark" : "light"}
              className="btn-sm btn-block"
              key={props.key}
              onClick={props.onClick}
              onDoubleClick={props.onDoubleClick}
            >
              {props.children}
              &nbsp;
              <FontAwesomeIcon icon={upIcon} />
              <FontAwesomeIcon icon={downIcon} />
            </Button>
          </Col>
        </F.Row>
        <br/>
    </span>
  )
}

ChapterButton.propTypes = {
    active: PropTypes.bool.isRequired,
    key: PropTypes.any,
    onClick: PropTypes.func.isRequired,
    onDoubleClick: PropTypes.func.isRequired,
}

export default ChapterButton
