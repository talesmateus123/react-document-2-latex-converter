import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Options from './Options'
import MockDocument from '../../../mocks/mock.document'
import MockFunction from '../../../mocks/mock.function'

describe('Options', () => {
    it('renders without crash', () => {
        const div = document.createElement('div')
        render(<Options
            document={MockDocument()}
            setDocument={MockFunction}
            validated={false}
            setValidated={MockFunction} />, div)
        unmountComponentAtNode(div)
    });
})
