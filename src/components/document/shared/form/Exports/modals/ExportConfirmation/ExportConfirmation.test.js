import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import ExportConfirmation from './ExportConfirmation'
import '@testing-library/jest-dom/extend-expect'

import MockFunction from 'mock.function'

describe('ExportConfirmation tests', () => {

    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(<ExportConfirmation 
            status={null}
            setStatus={MockFunction}
            showModal={true}
            setShowModal={MockFunction} />, div);
        unmountComponentAtNode(div)
    }); 

})
