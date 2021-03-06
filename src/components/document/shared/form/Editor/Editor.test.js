import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Editor from './Editor'
import MockDocument from 'mock.document'
import MockFunction from 'mock.function'

describe('Editor', () => {
    it('renders without crash', () => {
        const div = document.createElement('div')
        render(<Editor
            chapters={[MockDocument()]}
            setChapters={MockFunction}
            validated={false}
            setValidated={MockFunction} />, div)
        unmountComponentAtNode(div)
    });
})
