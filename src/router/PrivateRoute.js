import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import tokenService from './token'

function PrivateRoute({ component: Component, ...rest }) {
  /** If existe a token show the component else redirect to signup */
  return (
    <Route
      {...rest}
      render={props => tokenService.get() ? (          
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/entra', state: { from: props.location },}}/>
        )
      }
    />
  )
}

export default PrivateRoute
