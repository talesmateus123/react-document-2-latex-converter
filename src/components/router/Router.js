import React from 'react'
import { useRoutes } from 'hookrouter'

import Home from '../home/Home'

const routes = {
  '/': () => <Home />,
}

function Router() {
  return useRoutes(routes)
}

export default Router
