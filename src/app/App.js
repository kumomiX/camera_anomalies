import React from 'react'
import AppTemplate from 'templates/App'
import Header from 'features/Header'
import Sidebar from 'features/Sidebar'

export default function App() {
  return (
    <AppTemplate header={<Header />} sidebar={<Sidebar />}>
      asdadad
    </AppTemplate>
  )
}
