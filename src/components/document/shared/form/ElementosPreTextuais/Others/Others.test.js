import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Others from './Others'
import MockDocument from 'mock.document'
import MockFunction from 'mock.function'

describe('Others', () => {
    it('renders without crash', () => {
        const div = document.createElement('div')
        render(<Others
            document={MockDocument()}
            setDocument={MockFunction}
            validated={false}
            setValidated={MockFunction} />, div)
        unmountComponentAtNode(div)
    });
})
