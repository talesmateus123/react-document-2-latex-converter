import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import MainForm from './MainForm'
import MockDocument from '../shared/mocks/mock.document'
import MockFunction from '../shared/mocks/mock.function'

describe('MainForm', () => {
    it('renders without crash', () => {
        const div = document.createElement('div')
        render(<MainForm
            document={MockDocument()}
            setDocument={MockFunction}
            validated={false}
            setValidated={MockFunction}
            save={MockFunction} />, div)
        unmountComponentAtNode(div)
    });
})
