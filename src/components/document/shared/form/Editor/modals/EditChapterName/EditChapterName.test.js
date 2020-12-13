import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import EditChapterName from './EditChapterName'
import '@testing-library/jest-dom/extend-expect'

import MockFunction from '../../../../mocks/mock.function'
describe('EditChapterName tests', () => {

    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(<EditChapterName 
            handleSetChapter={MockFunction} 
            chapter={{}} 
            showModal={true} 
            setShowModal={() => false} />, div);
        unmountComponentAtNode(div)
    }); 

})
