import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import GeneralInfo from './GeneralInfo'

describe('GeneralInfo', () => {
    it('renders without crash', () => {
        const div = document.createElement('div')
        render(<GeneralInfo />, div)
        unmountComponentAtNode(div)
    });
})
