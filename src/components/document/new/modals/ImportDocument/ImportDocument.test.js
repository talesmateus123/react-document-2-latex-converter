import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import ImportDocument from './ImportDocument'
import '@testing-library/jest-dom/extend-expect'
import MockDocument from 'mock.document'
import MockFunction from 'mock.function'

describe('ImportDocument tests', () => {

    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(<ImportDocument document={MockDocument()} setDocument={MockFunction} showModal={true} setShowModal={MockFunction} />, div);
        unmountComponentAtNode(div)
    }); 

})
