import { combineReducers } from 'redux'
import {countera,source,sourcevalue,idaaaa,sourcevalue2} from './counter-reducer'


//使用redux的combineReducers方法将所有reducer打包起来 
const rootReducer = combineReducers({
  countera,
  source,
  sourcevalue,
  idaaaa,
  sourcevalue2
})

export default rootReducer
