import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Info from './Info'
import MockDocument from 'mock.document'
import DocumentStorageService from '../shared/services/document-storage.service'

describe('Info', () => {

    const [ , setDocumentsStorage ] = DocumentStorageService()
    const documentId = '1'

    beforeEach(() => {
        setDocumentsStorage([MockDocument(documentId)])
    })

    it('renders without crash', () => {
        const div = document.createElement('div')
        render(<Info id={documentId} />, div)
        unmountComponentAtNode(div)
    });
})
