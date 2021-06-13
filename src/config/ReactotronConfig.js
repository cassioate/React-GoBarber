import Reactotron from 'reactotron-react-js'

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === 'development') {
   const tron = Reactotron.configure().connect()

   tron.clear()

   console.tron = tron
}
