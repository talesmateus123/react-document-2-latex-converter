import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Info from './Info'
import Document from '../shared/models/document.model'

describe('Info', () => {

    const documentId = 1;
    const documentModel = new Document(documentId, 'Titulo')

    beforeEach(() => {
        localStorage.tasks = JSON.stringify([documentModel])
    })

    it('renders without crash', () => {
        const div = document.createElement('div')
        render(<Info id={documentId} />, div)
        unmountComponentAtNode(div)
    });
})
