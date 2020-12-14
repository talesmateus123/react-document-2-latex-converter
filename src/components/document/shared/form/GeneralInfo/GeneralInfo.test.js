import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import GeneralInfo from './GeneralInfo'
import MockDocument from 'mock.document'
import MockFunction from 'mock.function'

describe('GeneralInfo', () => {
    it('renders without crash', () => {
        const div = document.createElement('div')
        render(<GeneralInfo
            document={MockDocument()}
            setDocument={MockFunction}
            validated={false}
            setValidated={MockFunction} />, div)
        unmountComponentAtNode(div)
    });
})
