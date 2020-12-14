import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Exports from './Exports'
import MockDocument from 'mock.document'

describe('Exports', () => {
    it('renders without crash', () => {
        const div = document.createElement('div')
        render(<Exports
            document={MockDocument()} />, div)
        unmountComponentAtNode(div)
    });
})
