import React from 'react'
import fetch from 'isomorphic-fetch'

let Fetch = React.createClass({
	render(){
		return(
			<div onClick={this.props.operateRadio}>
				<input type="button" value="reactjs" ref="first_btn"/>
				<input type="button" value="frontend" ref="second_btn"/>
				<button>点击</button>
				<div>选择的url地址为：{this.props.url}</div>
			</div>
			)
	}
})
export default React.createClass({
	getDefaultProps(){
		return{
			source:'https://www.reddit.com/r/%s%.json'
		}
	},
	getInitialState(){
		return{
			url:''
		}
	},
	operateData(datappp){
		let _odiv = this.refs.odiv,
			arr = [];
		arr = datappp.map(function(ele){
			let _data = ele.data
			return '<div><a target="_blank" href="'+_data.url+'">'+_data.title+'</a></div>'
		});
		console.log(arr);
		_odiv.innerHTML = arr.join('');
	},
	handleClick(e){
		let _target = e.target,
			self = this;
		if(_target.nodeName === 'INPUT'){
			// console.log(_target.value);
			const url = _target.value;
			self.refs.odiv.innerHTML = ''
			self.setState({
				url:self.props.source.replace(/%s%/,url)
			})
		}
		if(_target.nodeName === "BUTTON"){console.log(self.state.url);
			fetch(self.state.url).then(function(response){
				response.json().then(function(data){
					self.operateData(data.data.children)
					console.log(data.data.children);
				});
			})
		}
	},
	render(){
		return(
			<div>
				<Fetch operateRadio={ this.handleClick } url={ this.state.url } />
				<div ref='odiv'></div>
			</div>
			)
	}
})