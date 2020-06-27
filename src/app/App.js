import React from 'react'
import AppTemplate from 'templates/App'
import Sidebar from 'features/Sidebar'
import CameraPage from 'pages/Camera'
import TemplatePage from 'pages/TemplatePage'
import { Route, Switch } from 'react-router'
import { Typography } from '@material-ui/core'
import { Helmet } from 'react-helmet'
import config from 'app/config'

export default function App() {
  return (
    <AppTemplate sidebar={<Sidebar />}>
      <Helmet>
        <title>{config.title}</title>
      </Helmet>
      <Switch>
        <Route path="/templates/:template" component={TemplatePage} />
        <Route path="/cameras/:camera" component={CameraPage} />
        <Route
          path="/"
          render={() => (
            <Typography variant="h5" style={{ margin: 'auto' }} align="center">
              Выберите камеру в списке слева
            </Typography>
          )}
        />
      </Switch>
    </AppTemplate>
  )
}
