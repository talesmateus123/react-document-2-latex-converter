import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Editor from './Editor'
import MockDocument from '../../shared/mocks/mock.document'
import MockFunction from '../../shared/mocks/mock.function'

describe('Editor', () => {
    it('renders without crash', () => {
        //console.log(document)
        const div = document.createElement('div')
        render(<Editor
            document={MockDocument()}
            setDocument={MockFunction}
            validated={false}
            setValidated={MockFunction} />, div)
        unmountComponentAtNode(div)
    });
})
