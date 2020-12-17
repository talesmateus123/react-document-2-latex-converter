import React from 'react'
import { useRoutes } from 'hookrouter'

import ListDocuments from '../document/list/List'
import NewDocuments from '../document/new/New'
import InfoDocuments from '../document/info/Info'

const routes = {
  '/': () => <ListDocuments />,
  '/new': () => <NewDocuments />,
  '/info/:id': ({id}) => <InfoDocuments id={id} />
}

function Router() {
  return useRoutes(routes)
}

export default Router
