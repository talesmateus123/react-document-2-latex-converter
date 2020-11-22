import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Form from './Form'

describe('Form', () => {
    it('renders without crash', () => {
        const div = document.createElement('div')
        render(<Form />, div)
        unmountComponentAtNode(div)
    });
})
