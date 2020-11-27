import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import Remove from './Remove'
import '@testing-library/jest-dom/extend-expect'

describe('Remove tests', () => {

    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Remove id={0} setLoadDocuments={() => false} showModal={true} setShowModal={() => false} />, div);
        unmountComponentAtNode(div)
    }); 

})
