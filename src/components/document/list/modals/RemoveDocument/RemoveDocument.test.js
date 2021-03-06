import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import RemoveDocument from './RemoveDocument'
import '@testing-library/jest-dom/extend-expect'
import MockFunction from 'mock.function'

describe('RemoveDocument tests', () => {

    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(<RemoveDocument id={'1'} setLoadDocuments={MockFunction} showModal={true} setShowModal={MockFunction} />, div);
        unmountComponentAtNode(div)
    }); 

})
