import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ElementosPreTextuais from './ElementosPreTextuais'

describe('ElementosPreTextuais', () => {
    it('renders without crash', () => {
        const div = document.createElement('div')
        render(<ElementosPreTextuais />, div)
        unmountComponentAtNode(div)
    });
})
