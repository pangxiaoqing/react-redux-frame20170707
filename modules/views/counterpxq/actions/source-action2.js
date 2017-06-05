

export function Fetch(sourceval,url){
	console.log(111111111111,sourceval,url);
	return function(dispatch){
		return fetch(url).then(function(response){
		response.json().then(function(data){
			console.log(121212,data.data.children)
			dispatch(sourceUrl(sourceval,data.data.children))
		});
	})
	}
}

export function sourceUrl(sourceval,data){console.log(333,sourceval,data)
	return{
		type:"BTNDATA_SHOW2",
		sourceval,
		data
	}
}



