import React from 'react'

let Content = React.createClass({
	render () {
		return (
			<div>
				<input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} />
				<h4>{this.props.myDataProp}</h4>
			</div>
		)
	}
})

export default React.createClass({
	getInitialState (){
		return { value : 'Hello Haiyun!'};
	},
	handleChange (e){
		this.setState({ value : e.target.value });
	},
	render () {
		let value = this.state.value;
		return (
			<div>
				<Content myDataProp={value} updateStateProp={ this.handleChange }></Content>
			</div>
		)
	}
})


