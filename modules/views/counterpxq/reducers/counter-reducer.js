import { INCREMENT_COUNTER,DECREMENT_COUNTER } from '../actions/counter-action'
// import { REACTJSURL_SHOW,FRONTENDURL_SHOW,BTNDATA_SHOW,IDAAA } from '../actions/source-action'

//reducer其实也是个方法而已,参数是state和action,返回值是新的state 
export function countera(state = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:  
      return state + 1
    case DECREMENT_COUNTER:
      return state - 1
    default:
      return state
  }
}

// const defaultState = source:'https://www.reddit.com/r/%s%.json';
export function source(state=[],action){
	switch(action.type){
		case "BTNDATA_SHOW":
			return action.json
		default:
			return state
	}
}
export function sourcevalue(state='',action){
	switch(action.type){
		case "REACTJSURL_SHOW":
			return action.aaa
		case "FRONTENDURL_SHOW":
			return action.bbb
		default:
			return state
	}
}

export function idaaaa(state='',action){
	if(action.type=="IDAAA"){
		return action.aaa
	}else{
		return state
	}
}


/*22222*/
export function sourcevalue2(state={sourceval:'',data:[]},action){
	switch(action.type){
		case "BTNDATA_SHOW2":
			return {
				sourceval:action.sourceval,
				data:action.data
			}
		default:
			return state
	}
}