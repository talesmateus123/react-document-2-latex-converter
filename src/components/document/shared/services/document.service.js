import axios from 'axios'

import PropTypes from 'prop-types'
import FileDownload from 'js-file-download'

function DocumentService(props) {

    const API_URL = process.env.REACT_APP_API_URL

    const parseDocument = document => {
        const parsedDocument = { ...document }
        parsedDocument.palavrasChaveAbstractX = parsedDocument.palavrasChaveAbstractX.map(object => object.text)
        parsedDocument.fichaCatalograficaPalavrasChave = parsedDocument.fichaCatalograficaPalavrasChave.map(object => object.text)
        parsedDocument.palavrasChaveResumo = parsedDocument.palavrasChaveResumo.map(object => object.text)
        parsedDocument.listaSiglas = parsedDocument.listaSiglas.map(object => `${object.item};${object.text}`)
        parsedDocument.listaSimbolos = parsedDocument.listaSimbolos.map(object => `${object.item};${object.text}`)
        return parsedDocument
    }

    const showSuccessMessage = msg => {
        props.setStatus({ msg, err: false})
    }

    const showErrorMessage = error => {
        props.setStatus({ msg: error.message, err: true})
    }

    const generateZippedDocument = async document => {
        const parsedDocument = parseDocument(document)
        props.setShowModal(true)
        try {
            await axios({url: `${API_URL}/zip`, method: 'POST', responseType: 'blob', data: parsedDocument}).then(res => {
                FileDownload(res.data, `${parsedDocument.titulo}.zip`)
            })
            showSuccessMessage('Projeto LaTeX gerado com sucesso.')
        }
        catch(e) {
            showErrorMessage(e)
        }
    }
    
    const generatePdfDocument = async document => {
        const parsedDocument = parseDocument(document)
        props.setShowModal(true)
        try {
            await axios({url: `${API_URL}/pdf`, method: 'POST', responseType: 'blob', data: parsedDocument}).then(res => {
                FileDownload(res.data, `${parsedDocument.titulo}.pdf`)
            })
            showSuccessMessage('PDF gerado com sucesso.')
        }
        catch(e) {
            showErrorMessage(e)
        }
    }

    const generateJsonDocument = document => {
        props.setShowModal(true)
        FileDownload(JSON.stringify(document), `${document.titulo}.json`)
        showSuccessMessage('Arquivo JSON gerado com sucesso.')
    }

    return { generateZippedDocument, generatePdfDocument, generateJsonDocument }
}

DocumentService.propTypes = {
    setStatus: PropTypes.func
  }

export default DocumentService