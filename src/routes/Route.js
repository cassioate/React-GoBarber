import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import history from '../services/history'

export default function RouteWrapper({
   component: Component,
   isPrivate,
   ...rest
}) {
   const signed = false
   if (!signed && isPrivate) {
      /** igual ao <Redirect/>, utilizado aqui apenas para mostrar a utilização dos dois no mesmo arquivo */
      history.push('/')
   }

   if (signed && !isPrivate) {
      return <Redirect to="/dashboard"></Redirect>
   }

   return <Route {...rest} component={Component}></Route>
}

RouteWrapper.propTypes = {
   isPrivate: PropTypes.bool,
   component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
      .isRequired,
}

RouteWrapper.defaultProps = {
   isPrivate: false,
}
