import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import MainForm from './MainForm'

describe('MainForm', () => {
    it('renders without crash', () => {
        const div = document.createElement('div')
        render(<MainForm
            document={{}}
            setDocument={() => false}
            validated={false}
            setValidated={() => false}
            save={() => false} />, div)
        unmountComponentAtNode(div)
    });
})
