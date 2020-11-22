import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Router from './Router'

describe('Router', () => {
    it('renders without crash', () => {
        const div = document.createElement('div')
        render(<Router />, div)
        unmountComponentAtNode(div)
    });
})
