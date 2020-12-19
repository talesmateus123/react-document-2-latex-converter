import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ChapterButton from './ChapterButton'
import MockFunction from 'mock.function'

describe('ChapterButton', () => {
    it('renders without crash', () => {
        const div = document.createElement('div')
        render(<ChapterButton
            active={true}
            onClick={MockFunction}
            onDoubleClick={MockFunction} />, div)
        unmountComponentAtNode(div)
    });
})
