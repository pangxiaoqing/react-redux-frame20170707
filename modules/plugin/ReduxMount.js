import React from 'react'
import { createStore } from 'redux'
import { Provider,connect} from 'react-redux'

let Mount = React.createClass({	
	
	getInitialState () {
		return {			
			arr : []
		}
	},
	
	componentDidMount () {
		var self = this,
			_arr = [];
		fetch(this.props.source).then(function(res){
			res.json().then(function(json){
				for(var i=0,len=json.length;i<len;i++){
					let element = json[i];
					_arr.push({value:element.url,id:element.id});
				}
				if(self.isMounted()){
					self.setState({
						arr : _arr
					})
				}
								
			})

		})
	},
	render () {
		var list = this.state.arr.map(function(element){
			return (
				<option id={element.id}>{element.value}</option>				
			)
		})

		return (
			<div>
				
				<select onChange={this.props.handleChange}>
					{list}
				</select>

				<div>
					<p>
						<label>id: </label>
						<span id="oid">{ this.props.myId }</span>
						
					</p>
					<p>
						<label>value: </label>
						<span id="ovalue">{ this.props.myValue }</span>
						
					</p>
				</div>
			</div>
		)
	}
})


export default React.createClass({	
	getInitialState () {
		return {
			value : '',
			id : ''
		}
	},

	handleChange : function(e){
		var target = e.target;
		
		this.setState({
			value : target.options[target.options.selectedIndex].value,
			id : target.options[target.options.selectedIndex].id
		})	
		// this.state.value = target.options[target.options.selectedIndex].value;
		// this.state.id = target.options[target.options.selectedIndex].id;
		var node = this.getDOMNode();
		//node.getElementsByTagName('span')[0].innerHTML = this.state.id
		//node.getElementsByTagName('span')[1].innerHTML = this.state.value
		//document.getElementById('ovalue') = this.state.value
		//console.log(Object.prototype.toString.call(this.getDOMNode()) );
		//console.log(node.getElementsByTagName('span')[0])

	},
	render () {
		return (
			<div>
				<Mount myValue={this.state.value} myId={this.state.id} handleChange={this.handleChange}  source='https://api.github.com/users/octocat/gists' />
			</div>
		)
	}
})