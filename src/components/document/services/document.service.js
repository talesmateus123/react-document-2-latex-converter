import axios from 'axios'

import PropTypes from 'prop-types'
import FileDownload from 'js-file-download'

function DocumentService(props) {

    const API_URL = process.env.REACT_APP_API_URL

    const showSuccessMessage = msg => {
        props.setAlert({ msg, err: false})
        setTimeout(() => props.setAlert(null), 6000)
    }

    const showErrorMessage = error => {
        props.setAlert({ msg: error.message, err: true})
        setTimeout(() => props.setAlert(null), 6000)
    }

    const generateZippedDocument = async document => {
        try {
            await axios({url: `${API_URL}/zip`, method: 'POST', responseType: 'blob', data: document}).then(res => {
                FileDownload(res.data, `${document.titulo}.zip`)
            })
            showSuccessMessage('Projeto LaTeX gerado com sucesso.')
        }
        catch(e) {
            showErrorMessage(e)
        }
    }
    
    const generatePdfDocument = async document => {
        try {
            await axios({url: `${API_URL}/pdf`, method: 'POST', responseType: 'blob', data: document}).then(res => {
                FileDownload(res.data, `${document.titulo}.pdf`)
            })
            showSuccessMessage('PDF gerado com sucesso.')
        }
        catch(e) {
            showErrorMessage(e)
        }
    }

    const generateJsonDocument = document => {
        FileDownload(JSON.stringify(document), `${document.titulo}.json`)
        showSuccessMessage('Arquivo JSON gerado com sucesso.')
    }

    return { generateZippedDocument, generatePdfDocument, generateJsonDocument }
}

DocumentService.propTypes = {
    setAlert: PropTypes.func
  }

export default DocumentService