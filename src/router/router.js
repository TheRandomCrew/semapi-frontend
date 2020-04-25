import React from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import GlobalStore from '../data/store/globalStore';

/** Import logic components */
import { Dashboard, LogIn, SignUp,Forgot, Home } from '../data'
import PrivateRoute from './PrivateRoute';

/** Import view components */
import { Page404, Store, Plan } from '../view';

/** @history : Maintains browsing history */
export const history = createBrowserHistory()

/** Main Router of the app*/
function Routes() {
  return (
    <Router history={history}>
      <GlobalStore>
        <Switch>
          <Route exact={true} path={'/'} component={Home} />
          <Route path={'/recuperar'} component={Forgot} />
          <Route path={'/plan/:plan'} component={Plan} />
          <Route path={'/inscribete'} component={SignUp} />
          <Route path={'/entra'} component={LogIn} />
          <Route path={'/tienda'} component={Store} />
          <PrivateRoute path={'/dashboard'} component={Dashboard} />
          <PrivateRoute path={'/dashboard/:userId'} component={Dashboard} />
          <Route path='*' component={Page404} />
        </Switch>
      </GlobalStore>
    </Router>
  )
}

export const links = [
  { label: "Dashboard API", path: '/inicio' }, 
  { label: "Searches", path: '/busquedas' },
  { label: "Errors", path: '/errores' }
];

export default Routes
