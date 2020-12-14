import React from 'react'
import './Listas.css'

import PropTypes from 'prop-types'
import { Form as F, Col, Button, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

function Listas(props) {

    const handleNewSigla = () => {
        const sigla = { id: new Date().getTime(), item: '', text: ''}
        props.document.listaSiglas.push(sigla)
        props.setDocument({ ...props.document, listaSiglas: props.document.listaSiglas })
    }
    
    const handleRemoveSigla = id => {
        const listaSiglas = props.document.listaSiglas.filter(sigla => sigla.id !== id)
        props.setDocument({ ...props.document, listaSiglas })
    }
    
    const handleSetSigla = siglaToBeSetted => {
        const listaSiglas = props.document.listaSiglas.map(sigla => {
            if (siglaToBeSetted.id === sigla.id)
                return siglaToBeSetted
            return sigla
        })
        props.setDocument({ ...props.document, listaSiglas })
    }
    
    const getFormControlSiglas = () => {
        if(props.document.listaSiglas && props.document.listaSiglas.length > 0) {

            return props.document.listaSiglas.map(sigla => (
                <InputGroup className="mb-3" key={sigla.id}>
                    <F.Control 
                        placeholder="ABNT"
                        value={sigla.item || ''}
                        onChange={event => handleSetSigla({ ...sigla, item: event.target.value})}
                    />
                    <F.Control 
                        placeholder="Associação Brasileira de Normas Técnicas"
                        value={sigla.text || ''}
                        onChange={event => handleSetSigla({ ...sigla, text: event.target.value})}
                    />
                    <InputGroup.Prepend>
                        <Button onClick={() => handleRemoveSigla(sigla.id)} variant="danger">
                            <FontAwesomeIcon icon={faMinus} /> &nbsp; Remover
                        </Button>
                    </InputGroup.Prepend>
                </InputGroup>
            ))
        }
        return <p>Nenhuma sigla adicionada</p>
    }


    
    const handleNewSimbolo = () => {
        const simbolo = { id: new Date().getTime(), text: ''}
        props.document.listaSimbolos.push(simbolo)
        props.setDocument({ ...props.document, listaSimbolos: props.document.listaSimbolos })
    }
    
    const handleRemoveSimbolo = id => {
        const listaSimbolos = props.document.listaSimbolos.filter(simbolo => simbolo.id !== id)
        props.setDocument({ ...props.document, listaSimbolos })
    }
    
    const handleSetSimbolo = simboloToBeSetted => {
        const listaSimbolos = props.document.listaSimbolos.map(simbolo => {
            if (simboloToBeSetted.id === simbolo.id)
                return simboloToBeSetted
            return simbolo
        })
        props.setDocument({ ...props.document, listaSimbolos })
    }
    
    const getFormControlSimbolos = () => {
        if(props.document.listaSimbolos && props.document.listaSimbolos.length > 0) {

            return props.document.listaSimbolos.map(simbolo => (
                <InputGroup className="mb-3" key={simbolo.id}>
                    <F.Control 
                        placeholder=" "
                        value={simbolo.item || ''}
                        onChange={event => handleSetSimbolo({ ...simbolo, item: event.target.value})}
                    />
                    <F.Control 
                        placeholder="Letra grega Gama"
                        value={simbolo.text || ''}
                        onChange={event => handleSetSimbolo({ ...simbolo, text: event.target.value})}
                    />
                    <InputGroup.Prepend>
                        <Button onClick={() => handleRemoveSimbolo(simbolo.id)} variant="danger">
                            <FontAwesomeIcon icon={faMinus} /> &nbsp; Remover
                        </Button>
                    </InputGroup.Prepend>
                </InputGroup>
            ))
        }
        return <p>Nenhumo símbolo adicionado</p>
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
                    <F.Label>
                        Lista de siglas
                        &nbsp;
                        <Button onClick={() => handleNewSigla()} variant="outline-success" size="sm">
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </F.Label>
                        { getFormControlSiglas() }
                    </F.Group>
                </Col>
            </F.Row>
            <hr/>
            <F.Row>
                <Col>
                    <F.Group>
                    <F.Label>
                        Lista de símbolos
                        &nbsp;
                        <Button onClick={() => handleNewSimbolo()} variant="outline-success" size="sm">
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </F.Label>
                        { getFormControlSimbolos() }
                    </F.Group>
                </Col>
            </F.Row>
        </F>
    )
}

Listas.propTypes = {
    document: PropTypes.object.isRequired,
    setDocument: PropTypes.func.isRequired,
    validated: PropTypes.bool.isRequired,
    setValidated: PropTypes.func.isRequired
}

export default Listas
