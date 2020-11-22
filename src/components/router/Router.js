import React from 'react'
import { useRoutes } from 'hookrouter'

import ListDocuments from '../document/list/List'

const routes = {
  '/': () => <ListDocuments />
}

function Router() {
  return useRoutes(routes)
}

export default Router
