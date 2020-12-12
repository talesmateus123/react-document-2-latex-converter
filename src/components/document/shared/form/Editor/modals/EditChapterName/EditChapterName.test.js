import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import EditChapterName from './EditChapterName'
import '@testing-library/jest-dom/extend-expect'

describe('EditChapterName tests', () => {

    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(<EditChapterName id={0} setLoadDocuments={() => false} showModal={true} setShowModal={() => false} />, div);
        unmountComponentAtNode(div)
    }); 

})
