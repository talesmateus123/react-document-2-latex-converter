import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { v4 as generateUniqueId } from 'uuid'

import ChapterButton from './ChapterButton'
import MockFunction from 'mock.function'

describe('ChapterButton', () => {
    it('renders without crash', () => {
        const div = document.createElement('div')
        render(<ChapterButton
            active={true}
            key={generateUniqueId()}
            onClick={MockFunction}
            onDoubleClick={MockFunction} />, div)
        unmountComponentAtNode(div)
    });
})
