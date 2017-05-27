import React from 'react'
import Invest from './../Invest'
import NavLink from './../../NavLink'

export default React.createClass({
	render () {
		return (
			<div>
				<h2>详细信息</h2>
				<p><NavLink to='/invest'>返回</NavLink></p>
				<p>
					<label>投资人：</label>
					<span>{this.props.params.userName}</span>
				</p>
				<p>
					<label>年龄：</label>
					<span>{this.props.params.age}</span>
				</p>
			</div>
		)
	}
})