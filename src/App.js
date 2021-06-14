import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'

import './config/ReactotronConfig'

import Routes from './routes'
import history from './services/history'

//Tem que importar depois do reactotron
import store from './store'

import GlobalStyle from './styles/global'

function App() {
   return (
      <Provider store={store}>
         <Router history={history}>
            <Routes></Routes>
            <GlobalStyle></GlobalStyle>
         </Router>
      </Provider>
   )
}

export default App
