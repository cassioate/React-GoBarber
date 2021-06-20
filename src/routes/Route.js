import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import history from '../services/history'

import AuthLayout from '../pages/_layouts/auth'
import DefaultLayout from '../pages/_layouts/default'

import store from '../store'
export default function RouteWrapper({
   component: Component,
   isPrivate,
   ...rest
}) {
   const { signed } = store.getState().auth

   if (!signed && isPrivate) {
      /** igual ao <Redirect/>, utilizado aqui apenas para mostrar a utilização dos dois no mesmo arquivo */
      history.push('/')
   }

   if (signed && !isPrivate) {
      return <Redirect to="/dashboard"></Redirect>
   }

   const Layout = signed ? DefaultLayout : AuthLayout

   return (
      <Route
         {...rest}
         render={(props) => (
            <Layout>
               <Component {...props}></Component>
            </Layout>
         )}
      ></Route>
   )
}

RouteWrapper.propTypes = {
   isPrivate: PropTypes.bool,
   component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
      .isRequired,
}

RouteWrapper.defaultProps = {
   isPrivate: false,
}
