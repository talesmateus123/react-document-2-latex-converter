import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import New from './New'

describe('Info', () => {
    it('renders without crash', () => {
        const div = document.createElement('div')
        render(<New />, div)
        unmountComponentAtNode(div)
    });
})
