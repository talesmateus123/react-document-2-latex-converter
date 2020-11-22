import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from './Home'

describe('Home', () => {
    it('renders without crash', () => {
        const div = document.createElement('div')
        render(<Home />, div)
        unmountComponentAtNode(div)
    });
})
