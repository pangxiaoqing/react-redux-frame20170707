import React from 'react'
import NavLink from './../NavLink'

export default React.createClass({
	render () {
		return (
			<div>
				<h2>投资管理</h2>				
				<NavLink to='/info/zhangsan/36'>投资</NavLink>
			</div>
		)
	}
})