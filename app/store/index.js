import {createStore, applyMiddleware, compose} from 'redux'
import reducers from '../reducers'

import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'

const store = createStore(
  reducers,
  compose(
    applyMiddleware( ReduxThunk, logger )
  )
)

export default store