import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import RemoveChapter from './RemoveChapter'
import '@testing-library/jest-dom/extend-expect'

describe('RemoveChapter tests', () => {
    
    it('renders without crash', () => {
        const div = document.createElement('div')
        ReactDOM.render(<RemoveChapter 
            id={0} 
            handleRemoveChapter={() => false} 
            showModal={true} 
            setShowModal={() => false} />, div);
        unmountComponentAtNode(div)
    }); 

})
