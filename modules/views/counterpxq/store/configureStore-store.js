import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers/index-reducer'


export default function configureStore(initialState) {

const store = createStore(reducer,applyMiddleware(thunk))

  return store
}
