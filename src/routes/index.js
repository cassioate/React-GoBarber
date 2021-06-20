import React from 'react'
import { Switch } from 'react-router-dom'
import RouteWrapper from './Route'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'

export default function Routes() {
   return (
      <Switch>
         <RouteWrapper path="/" exact component={SignIn}></RouteWrapper>
         <RouteWrapper path="/register" component={SignUp}></RouteWrapper>
         <RouteWrapper
            path="/dashboard"
            component={Dashboard}
            isPrivate
         ></RouteWrapper>
         <RouteWrapper
            path="/profile"
            component={Profile}
            isPrivate
         ></RouteWrapper>

         {/* Como o path é "/" sem o EXACT, tudo que nao for exatamente o caminho "/", ou outra rota ja contemplada acima
           (Pois caso exista uma rota acima, ele não chegará até aqui), ele irá redirecionar para erro */}
         <RouteWrapper path="/" component={() => <h1>404</h1>}></RouteWrapper>
      </Switch>
   )
}
