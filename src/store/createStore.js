import { applyMiddleware, compose, createStore } from 'redux'

export default (reducers, middleware) => {
   const enhancer =
      // eslint-disable-next-line no-undef
      process.env.NODE_ENV === 'development'
         ? compose(
              console.tron.createEnhancer(),
              applyMiddleware(...middleware)
           )
         : applyMiddleware(...middleware)

   return createStore(reducers, enhancer)
}
