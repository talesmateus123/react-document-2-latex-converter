import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Editor from './Editor'
import MockFunction from 'mock.function'

describe('Editor', () => {
    it('renders without crash', () => {
        //console.log(document)
        const div = document.createElement('div')
        render(<Editor
            chapters={[]}
            setChapters={MockFunction}
            validated={false}
            setValidated={MockFunction} />, div)
        unmountComponentAtNode(div)
    });
})
