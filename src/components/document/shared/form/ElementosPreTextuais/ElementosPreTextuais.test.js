import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ElementosPreTextuais from './ElementosPreTextuais'
import MockDocument from 'mock.document'
import MockFunction from 'mock.function'

describe('ElementosPreTextuais', () => {
    it('renders without crash', () => {
        const div = document.createElement('div')
        render(<ElementosPreTextuais
            document={MockDocument()}
            setDocument={MockFunction}
            validated={false}
            setValidated={MockFunction} />, div)
        unmountComponentAtNode(div)
    });
})
