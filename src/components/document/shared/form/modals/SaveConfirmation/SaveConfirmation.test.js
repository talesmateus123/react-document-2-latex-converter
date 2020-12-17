import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import SaveConfirmation from './SaveConfirmation'
import '@testing-library/jest-dom/extend-expect'

import MockFunction from 'mock.function'

describe('SaveConfirmation tests', () => {

    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(<SaveConfirmation showModal={true} setShowModal={MockFunction} />, div);
        unmountComponentAtNode(div)
    }); 

})
