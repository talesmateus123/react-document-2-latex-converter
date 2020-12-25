import React from 'react'
import './Options.css'

import PropTypes from 'prop-types'
import { Form as F, Col } from 'react-bootstrap'

function ElementosPreTextuais(props) {

    const setDocumentEnabledAgradecimentos = event => {
        props.setDocument({ ...props.document, enabledAgradecimentos: event.target.checked})
    }
    
    const setDocumentEnabledDedicatoria = event => {
        props.setDocument({ ...props.document, enabledDedicatoria: event.target.checked})
    }

    const setDocumentEnabledEpigrafe = event => {
        props.setDocument({ ...props.document, enabledEpigrafe: event.target.checked})
    }

    const setDocumentEnabledFichaCatalografica = event => {
        props.setDocument({ ...props.document, enabledFichaCatalografica: event.target.checked})
    }

    const setDocumentEnabledListaSiglas = event => {
        props.setDocument({ ...props.document, enabledListaSiglas: event.target.checked})
    }

    const setDocumentEnabledListaSimbolos = event => {
        props.setDocument({ ...props.document, enabledListaSimbolos: event.target.checked})
    }

    const setDocumentEnabledListaTabelas = event => {
        props.setDocument({ ...props.document, enabledListaTabelas: event.target.checked})
    }

    const setDocumentEnabledListaAlgoritmos = event => {
        props.setDocument({ ...props.document, enabledListaAlgoritmos: event.target.checked})
    }

    const setDocumentEnabledListaFiguras = event => {
        props.setDocument({ ...props.document, enabledListaFiguras: event.target.checked})
    }

    const setDocumentEnabledListaQuadros = event => {
        props.setDocument({ ...props.document, enabledListaQuadros: event.target.checked})
    }

    return (
        <div>
            <F.Row>
                <Col >
                    <F.Group>
                        <F.Check 
                            type="switch"
                            id="enabled-agradecimentos"
                            label={props.document.enabledAgradecimentos ? 'Agradecimentos habilitado' : 'Agradecimentos desabilitado'}
                            checked={props.document.enabledAgradecimentos ? props.document.enabledAgradecimentos : false}
                            onChange={setDocumentEnabledAgradecimentos}
                        />
                        <F.Check 
                            type="switch"
                            id="enabled-dedicatoria"
                            label={props.document.enabledDedicatoria ? 'Dedicatória habilitada' : 'Dedicatória desabilitada'}
                            checked={props.document.enabledDedicatoria ? props.document.enabledDedicatoria : false}
                            onChange={setDocumentEnabledDedicatoria}
                        />
                        <F.Check 
                            type="switch"
                            id="enabled-epigrafe"
                            label={props.document.enabledEpigrafe ? 'Epígrafe habilitado' : 'Epígrafe desabilitado'}
                            checked={props.document.enabledEpigrafe ? props.document.enabledEpigrafe : false}
                            onChange={setDocumentEnabledEpigrafe}
                        />
                        <F.Check 
                            type="switch"
                            id="enabled-ficha-catalografica"
                            label={props.document.enabledFichaCatalografica ? 'Ficha catalográfica habilitada' : 'Ficha catalográfica desabilitada'}
                            checked={props.document.enabledFichaCatalografica ? props.document.enabledFichaCatalografica : false}
                            onChange={setDocumentEnabledFichaCatalografica}
                        />
                        <F.Check 
                            type="switch"
                            id="enabled-lista-siglas"
                            label={props.document.enabledListaSiglas ? 'Lista de siglas habilitada' : 'Lista de siglas desabilitada'}
                            checked={props.document.enabledListaSiglas ? props.document.enabledListaSiglas : false}
                            onChange={setDocumentEnabledListaSiglas}
                        />
                        <F.Check 
                            type="switch"
                            id="enabled-lista-simbolos"
                            label={props.document.enabledListaSimbolos ? 'Lista de símbolos habilitada' : 'Lista de símbolos desabilitada'}
                            checked={props.document.enabledListaSimbolos ? props.document.enabledListaSimbolos : false}
                            onChange={setDocumentEnabledListaSimbolos}
                        />
                        <F.Check 
                            type="switch"
                            id="enabled-lista-tabelas"
                            label={props.document.enabledListaTabelas ? 'Lista de tabelas habilitada' : 'Lista de tabelas desabilitada'}
                            checked={props.document.enabledListaTabelas ? props.document.enabledListaTabelas : false}
                            onChange={setDocumentEnabledListaTabelas}
                        />
                        <F.Check 
                            type="switch"
                            id="enabled-lista-algoritmos"
                            label={props.document.enabledListaAlgoritmos ? 'Lista de algoritmos habilitada' : 'Lista de algoritmos desabilitada'}
                            checked={props.document.enabledListaAlgoritmos ? props.document.enabledListaAlgoritmos : false}
                            onChange={setDocumentEnabledListaAlgoritmos}
                        />
                        <F.Check 
                            type="switch"
                            id="enabled-lista-figuras"
                            label={props.document.enabledListaFiguras ? 'Lista de figuras habilitada' : 'Lista de figuras desabilitada'}
                            checked={props.document.enabledListaFiguras ? props.document.enabledListaFiguras : false}
                            onChange={setDocumentEnabledListaFiguras}
                        />
                        <F.Check 
                            type="switch"
                            id="enabled-quadros"
                            label={props.document.enabledListaQuadros ? 'Lista de quadros habilitada' : 'Lista de quadros desabilitada'}
                            checked={props.document.enabledListaQuadros ? props.document.enabledListaQuadros : false}
                            onChange={setDocumentEnabledListaQuadros}
                        />
                    </F.Group>
                </Col>
            </F.Row>
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
