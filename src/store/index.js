import createSagaMiddleware from 'redux-saga'
import createStore from './createStore'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

const sagaMonitor =
   // eslint-disable-next-line no-undef
   process.env.NODE_ENV === 'development'
      ? console.tron.createSagaMonitor()
      : null

const sagaMiddlware = createSagaMiddleware(sagaMonitor)
const middlware = [sagaMiddlware]
const store = createStore(rootReducer, middlware)

sagaMiddlware.run(rootSaga)

export default store
