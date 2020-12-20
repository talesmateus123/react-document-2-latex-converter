import React from 'react'
import './Others.css'

import PropTypes from 'prop-types'
import { Form as F, Col, Button, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { v4 as generateUniqueId } from 'uuid'

function Others(props) {

    const FORM_ROWS = 5

    const setDocumentAgradecimentos = event => {
        props.setDocument({ ...props.document, agradecimentos: event.target.value })
    }

    const setDocumentDedicatoria = event => {
        props.setDocument({ ...props.document, dedicatoria: event.target.value })
    }

    const setDocumentEpigrafe = event => {
        props.setDocument({ ...props.document, epigrafe: event.target.value })
    }

    const setDocumentPreAmbulo = event => {
        props.setDocument({ ...props.document, preAmbulo: event.target.value })
    }

    const handleNewFichaCatalograficaPalavraChave = () => {
        const palavraChave = { id: generateUniqueId(), text: ''}
        props.document.fichaCatalograficaPalavrasChave.push(palavraChave)
        props.setDocument({ ...props.document, fichaCatalograficaPalavrasChave: props.document.fichaCatalograficaPalavrasChave })
    }
    
    const handleRemoveFichaCatalograficaPalavraChave = id => {
        const fichaCatalograficaPalavrasChave = props.document.fichaCatalograficaPalavrasChave.filter(palavraChave => palavraChave.id !== id)
        props.setDocument({ ...props.document, fichaCatalograficaPalavrasChave })
    }
    
    const handleSetFichaCatalograficaPalavrasChave = palavraChaveToBeSetted => {
        const fichaCatalograficaPalavrasChave = props.document.fichaCatalograficaPalavrasChave.map(palavraChave => {
            if (palavraChaveToBeSetted.id === palavraChave.id)
                return palavraChaveToBeSetted
            return palavraChave
        })
        props.setDocument({ ...props.document, fichaCatalograficaPalavrasChave })
    }
    
    const getFormControlfichaCatalograficaPalavrasChave = () => {
        if(props.document.fichaCatalograficaPalavrasChave && props.document.fichaCatalograficaPalavrasChave.length > 0) {

            return props.document.fichaCatalograficaPalavrasChave.map((fichaCatalograficaPalavraChave, index) => (
                <InputGroup className="mb-3" key={fichaCatalograficaPalavraChave}>
                    <F.Control 
                        placeholder={`Palavra-chave ${index+1}`}
                        value={fichaCatalograficaPalavraChave.text || ''}
                        onChange={event => handleSetFichaCatalograficaPalavrasChave({id: fichaCatalograficaPalavraChave.id, text: event.target.value})}
                        disabled={!props.document.enabledFichaCatalografica}
                    />
                    <InputGroup.Prepend>
                        <Button 
                            onClick={() => handleRemoveFichaCatalograficaPalavraChave(fichaCatalograficaPalavraChave.id)} 
                            variant="danger"
                            disabled={!props.document.enabledFichaCatalografica} >
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
                        <F.Label>Agradecimentos</F.Label>
                        <F.Control 
                            as="textarea" 
                            rows={FORM_ROWS}
                            placeholder="Escreva o texto dos agradecimentos aqui"
                            value={props.document.agradecimentos || ''}
                            onChange={setDocumentAgradecimentos}
                            disabled={!props.document.enabledAgradecimentos}
                        />
                    </F.Group>
                </Col>
            </F.Row>
            <F.Row>
                <Col>
                    <F.Group>
                        <F.Label>Dedicatória</F.Label>
                        <F.Control 
                            as="textarea" 
                            rows={FORM_ROWS}
                            placeholder="Escreva o texto da dedicatória aqui"
                            value={props.document.dedicatoria || ''}
                            onChange={setDocumentDedicatoria}
                            disabled={!props.document.enabledDedicatoria}
                        />
                    </F.Group>
                </Col>
            </F.Row>
            <F.Row>
                <Col>
                    <F.Group>
                        <F.Label>Epígrafe</F.Label>
                        <F.Control 
                            as="textarea" 
                            rows={FORM_ROWS}
                            placeholder="Escreva o texto do epígrafe aqui"
                            value={props.document.epigrafe || ''}
                            onChange={setDocumentEpigrafe}
                            disabled={!props.document.enabledEpigrafe}
                        />
                    </F.Group>
                </Col>
            </F.Row>
            <F.Row>
                <Col>
                    <F.Group>
                        <F.Label>Preâmbulo</F.Label>
                        <F.Control 
                            as="textarea" 
                            rows={FORM_ROWS}
                            placeholder="Escreva o texto do preâmbulo aqui"
                            value={props.document.preAmbulo || ''}
                            onChange={setDocumentPreAmbulo}
                        />
                    </F.Group>
                </Col>
            </F.Row>
            <F.Row>
                <Col>
                    <F.Group>
                        <F.Label>
                            Palavras-chave da ficha catalográfica
                            &nbsp;
                            <Button 
                                onClick={() => handleNewFichaCatalograficaPalavraChave()} 
                                variant="outline-success" 
                                size="sm"
                                disabled={!props.document.enabledFichaCatalografica} >
                                <FontAwesomeIcon icon={faPlus} />
                            </Button>
                        </F.Label>
                        { getFormControlfichaCatalograficaPalavrasChave() }
                    </F.Group>
                </Col>
            </F.Row>
            <hr/>
        </F>
    )
}

Others.propTypes = {
    document: PropTypes.object.isRequired,
    setDocument: PropTypes.func.isRequired,
    validated: PropTypes.bool.isRequired,
    setValidated: PropTypes.func.isRequired
}

export default Others
