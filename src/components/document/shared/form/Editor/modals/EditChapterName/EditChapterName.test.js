import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import EditChapterName from './EditChapterName'
import '@testing-library/jest-dom/extend-expect'

import MockChapter from 'mock.chapter'

import MockFunction from 'mock.function'
describe('EditChapterName tests', () => {

    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(<EditChapterName 
            handleSetChapter={MockFunction} 
            chapter={MockChapter()}
            showModal={true} 
            setShowModal={() => false} />, div);
        unmountComponentAtNode(div)
    }); 

})
