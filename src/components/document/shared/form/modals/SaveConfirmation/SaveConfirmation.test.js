import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import SaveConfirmation from './SaveConfirmation'
import '@testing-library/jest-dom/extend-expect'

describe('SaveConfirmation tests', () => {

    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(<SaveConfirmation showModal={true} setShowModal={() => false} />, div);
        unmountComponentAtNode(div)
    }); 

})
