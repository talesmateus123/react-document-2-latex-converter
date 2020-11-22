import React from 'react'
import { useRoutes } from 'hookrouter'

import ListDocuments from '../document/list/List'
import InfoDocuments from '../document/info/Info'

const routes = {
  '/': () => <ListDocuments />,
  '/info/:id': ({id}) => <InfoDocuments id={parseInt(id)} />
}

function Router() {
  return useRoutes(routes)
}

export default Router
