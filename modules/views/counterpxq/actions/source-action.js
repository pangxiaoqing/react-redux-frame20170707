// import fetch from 'isomorphic-fetch'
// export const REACTJSURL_SHOW = 'REACTJSURL_SHOW'
// export const FRONTENDURL_SHOW = 'FRONTENDURL_SHOW'
// export const BTNDATA_SHOW = 'BTNDATA_SHOW'
/*export const HANDLECLICK = 'HANDLECLICK'*/
// export const IDAAA="IDAAA"

export function reactjsurl(reactjsvalue){
	return{
		type:"REACTJSURL_SHOW",
		aaa:reactjsvalue
	}
}

export function frontendurl(frontendvalue){
	return{
		type:"FRONTENDURL_SHOW",
		bbb:frontendvalue
	}
}


export function Fetch(url){//console.log(111111111111,url);
	
	return function(dispatch){
		return fetch(url).then(function(response){
		response.json().then(function(data){
			// self.operateData(data.data.children)
			dispatch(btndata(data.data.children))
		});
	})
	}
}

export function btndata(data){//console.log(333,data)
	return{
		type:"BTNDATA_SHOW",
		json : data
	}
}

export function aaaaa(ida){
	return{
		type:"IDAAA",
		aaa:ida
	}
}