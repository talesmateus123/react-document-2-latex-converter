import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import ExportConfirmation from './ExportConfirmation'
import '@testing-library/jest-dom/extend-expect'

describe('ExportConfirmation tests', () => {

    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(<ExportConfirmation id={0} setLoadDocuments={() => false} showModal={true} setShowModal={() => false} />, div);
        unmountComponentAtNode(div)
    }); 

})
