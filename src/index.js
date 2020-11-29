import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'
import 'react-quill/dist/quill.core.css'
import './index.css'

import Router from './components/router/Router'

ReactDOM.render(<div className="container"><Router /></div>, document.getElementById('root'))
