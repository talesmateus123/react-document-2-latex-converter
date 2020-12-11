import axios from 'axios'

const FileDownload = require('js-file-download');

const API_URL = process.env.REACT_APP_API_URL

function DocumentService() {
    const showSuccessMessage = msg => {
        alert(`Deu certo: ${msg}`)
    }

    const showErrorMessage = msg => {
        alert(`Deu errado: ${msg}`)
    }

    const generateZippedDocument = async document => {
        try {
            await axios({url: `${API_URL}/zip`, method: 'POST', responseType: 'blob', data: document}).then(res => {
                FileDownload(res.data, 'report.zip')
            })
            showSuccessMessage('Ok')
        }
        catch(e) {
            showErrorMessage(e)
        }
    }
    
    const generatePdfDocument = async document => {
        try {
            await axios({url: `${API_URL}/pdf`, method: 'POST', responseType: 'blob', data: document}).then(res => {
                FileDownload(res.data, 'report.pdf')
            })
            showSuccessMessage('Ok')
        }
        catch(e) {
            showErrorMessage(e)
        }
    }

    const generateJsonDocument = document => {
        FileDownload(JSON.stringify(document), 'report.json')
    }

    return { generateZippedDocument, generatePdfDocument, generateJsonDocument }
}

export default DocumentService()