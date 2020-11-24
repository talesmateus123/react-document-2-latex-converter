import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Info from './Info'

describe('Info', () => {
    it('renders without crash', () => {
        const div = document.createElement('div')
        render(<Info id={1} />, div)
        unmountComponentAtNode(div)
    });
})
