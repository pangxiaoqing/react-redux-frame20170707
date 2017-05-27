import { combineReducers } from 'redux'
import countera from './counter-reducer'

//使用redux的combineReducers方法将所有reducer打包起来 
const rootReducer = combineReducers({
  countera
})

export default rootReducer
