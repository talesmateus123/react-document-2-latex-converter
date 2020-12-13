import React from 'react'
import './Resumo.css'

import PropTypes from 'prop-types'
import { Form as F, Col, Button, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

function Resumo(props) {
    const FORM_ROWS = 5

    const setDocumentTextoResumo = event => {
        props.setDocument({ ...props.document, textoResumo: event.target.value })
    }
    
    const setDocumentTextoAbstractX = event => {
        props.setDocument({ ...props.document, textoAbstractX: event.target.value })
    }

    const handleNewPalavraChaveResumo = () => {
        const palavraChave = { id: new Date().getTime(), text: ''}
        props.document.palavrasChaveResumo.push(palavraChave)
        props.setDocument({ ...props.document, palavrasChaveResumo: props.document.palavrasChaveResumo })
    }
    
    const handleRemovePalavraChaveResumo = id => {
        const palavrasChaveResumo = props.document.palavrasChaveResumo.filter(palavraChave => palavraChave.id !== id)
        props.setDocument({ ...props.document, palavrasChaveResumo })
    }
    
    const handleSetPalavraChaveResumo = palavraChaveToBeSetted => {
        const palavrasChaveResumo = props.document.palavrasChaveResumo.map(palavraChave => {
            if (palavraChaveToBeSetted.id === palavraChave.id)
                return palavraChaveToBeSetted
            return palavraChave
        })
        props.setDocument({ ...props.document, palavrasChaveResumo })
    }
    
    const getFormControlPalavrasChaveResumo = () => {
        if(props.document.palavrasChaveResumo && props.document.palavrasChaveResumo.length > 0) {

            return props.document.palavrasChaveResumo.map((palavraChaveResumo, index) => (
                <InputGroup className="mb-3" key={palavraChaveResumo.id}>
                    <F.Control 
                        placeholder={`Palavra-chave ${index+1}`}
                        value={palavraChaveResumo.text || ''}
                        onChange={event => handleSetPalavraChaveResumo({id: palavraChaveResumo.id, text: event.target.value})}
                    />
                    <InputGroup.Prepend>
                        <Button onClick={() => handleRemovePalavraChaveResumo(palavraChaveResumo.id)} variant="danger">
                            <FontAwesomeIcon icon={faMinus} /> &nbsp; Remover
                        </Button>
                    </InputGroup.Prepend>
                </InputGroup>
            ))
        }
        return <p>Nenhuma palavra-chave adicionada</p>
    }

    const handleNewPalavraChaveAbstract = () => {
        const palavraChave = { id: new Date().getTime(), text: ''}
        props.document.palavrasChaveAbstractX.push(palavraChave)
        props.setDocument({ ...props.document, palavrasChaveAbstractX: props.document.palavrasChaveAbstractX })
    }
    
    const handleRemovePalavraChaveAbstract = id => {
        const palavrasChaveAbstractX = props.document.palavrasChaveAbstractX.filter(palavraChave => palavraChave.id !== id)
        props.setDocument({ ...props.document, palavrasChaveAbstractX })
    }
    
    const handleSetPalavraChaveAbstract = palavraChaveToBeSetted => {
        const palavrasChaveAbstractX = props.document.palavrasChaveAbstractX.map(palavraChave => {
            if (palavraChaveToBeSetted.id === palavraChave.id)
                return palavraChaveToBeSetted
            return palavraChave
        })
        props.setDocument({ ...props.document, palavrasChaveAbstractX })
    }
    
    const getFormControlPalavrasChaveAbstract = () => {
        if(props.document.palavrasChaveAbstractX && props.document.palavrasChaveAbstractX.length > 0) {
            return props.document.palavrasChaveAbstractX.map((palavraChaveResumo, index) => (
                <InputGroup className="mb-3" key={palavraChaveResumo.id}>
                    <F.Control 
                        placeholder={`Palavra-chave ${index+1}`}
                        value={palavraChaveResumo.text || ''}
                        onChange={event => handleSetPalavraChaveAbstract({id: palavraChaveResumo.id, text: event.target.value})}
                    />
                    <InputGroup.Prepend>
                        <Button onClick={() => handleRemovePalavraChaveAbstract(palavraChaveResumo.id)} variant="danger">
                            <FontAwesomeIcon icon={faMinus} /> &nbsp; Remover
                        </Button>
                    </InputGroup.Prepend>
                </InputGroup>
            ))
        }
        return <p>Nenhuma palavra-chave adicionada</p>
    }

    return (
        <F
            validated={props.validated}
            noValidate
            onSubmit={props.save}
        >
            <F.Row>
                <Col>
                    <F.Group>
                    <F.Label>Resumo</F.Label>
                        <F.Control 
                            as="textarea" 
                            rows={FORM_ROWS}
                            placeholder="Escreva o texto do resumo aqui"
                            value={props.document.textoResumo || ''}
                            onChange={setDocumentTextoResumo}
                        />
                    </F.Group>
                </Col>
            </F.Row>
            <F.Row>
                <Col>
                    <F.Group>
                    <F.Label>
                        Palavras-chave
                        &nbsp;
                        <Button onClick={() => handleNewPalavraChaveResumo()} variant="outline-success" size="sm">
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </F.Label>
                        { getFormControlPalavrasChaveResumo() }
                    </F.Group>
                </Col>
            </F.Row>
            <hr/>
            <F.Row>
                <Col>
                    <F.Group>
                    <F.Label>Resumo (em inglês)</F.Label>
                        <F.Control 
                            as="textarea" 
                            rows={FORM_ROWS}
                            placeholder="Write the abstract text here"
                            value={props.document.textoAbstractX || ''}
                            onChange={setDocumentTextoAbstractX}
                        />
                    </F.Group>
                </Col>
            </F.Row>
            <F.Row>
                <Col>
                    <F.Group>
                    <F.Label>
                        Palavras-chave (em inglês)
                        &nbsp;
                        <Button onClick={() => handleNewPalavraChaveAbstract()} variant="outline-success" size="sm">
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </F.Label>
                        { getFormControlPalavrasChaveAbstract() }
                    </F.Group>
                </Col>
            </F.Row>
        </F>
    )
}

Resumo.propTypes = {
    document: PropTypes.object.isRequired,
    setDocument: PropTypes.func.isRequired,
    validated: PropTypes.bool.isRequired,
    setValidated: PropTypes.func.isRequired
}

export default Resumo
