import React from 'react'

let Content = React.createClass({
	render () {
		return (
			<div>
				<select onChange={this.props.mySelectProp}>
					<option value='0'>请选择</option>
					<option value='1_aa'>aa</option>
					<option value='2_bb'>bb</option>
					<option value='3_cc'>cc</option>
					<option value='4_dd'>dd</option>
					<option value='5_ee'>ee</option>
				</select>
				<h4>{ this.props.selectValue}</h4>
			</div>
		)
	}
})

export default React.createClass({
	getInitialState () {
		return {value : '请选择'};
	},
	handleChange (e) {
		this.setState({value:e.target.value})
	},
	render () {
		let value = this.state.value;
		return (
			<div>
				<Content selectValue={value} mySelectProp={this.handleChange} />
			</div>
		)
	}
})

