import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
// import PrivateRoute from './PrivateRoute';
import { Login } from './Login';
import { Home } from './Home';
import { Signup } from './Register';
import GlobalStore from '../store/globalStore';
export const history = createBrowserHistory()

function Routes() {
  return (
    <Router history={history}>
      <GlobalStore>
        <Switch>
          <Route exact={true} path={'/'} component={Home} />
          <Route exact={true} path={'/inscribete'} component={Signup} />
          <Route exact={true} path={'/entra'} component={Login} />
          {/* <PrivateRoute exact={false} path={'/'} component={Home} />
          <PrivateRoute path="/:userId" component={Home} /> */}
        </Switch>
      </GlobalStore>
    </Router>
  )
}

export const links = [
  { to: '/', name: "Ranking Palabras Clave", id: 0 },
  { to: '/articulos', name: "Articulos", id: 1 },
  { to: '/caracteristicas', name: "Caracteristicas", id: 2 },
  { to: '/precios', name: "Precios", id: 3 },
  { to: '/afiliados', name: "Afiliados", id: 4 },
  { to: '/contacto', name: "Contacto", id: 5 }
]

export default Routes
