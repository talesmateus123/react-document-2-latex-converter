import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import RemoveDocument from './RemoveDocument'
import '@testing-library/jest-dom/extend-expect'

describe('RemoveDocument tests', () => {

    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(<RemoveDocument id={'1'} setLoadDocuments={() => false} showModal={true} setShowModal={() => false} />, div);
        unmountComponentAtNode(div)
    }); 

})
