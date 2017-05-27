import React from 'react'

const InputCp = React.createClass({
	render(){
		let data = this.props.data
		return(
			<div>
				<input type={data.types} name={data.name} onChange={this.props.change} placeholder={"请输入"+data.detail} />	
			</div>
			)
	}
})

export default InputCp;