import React from 'react'
import NavLink from './../NavLink'

export default React.createClass({
	render () {
		return (
			<div>
				<h1>用户管理页面</h1>
				<ul>
					<li><NavLink to='user/zhangsan/123'>张三</NavLink></li>
					<li><NavLink to='user/lisi/456'>李四</NavLink></li>
				</ul>
				<div>
					{ this.props.children }
				</div>
			</div>
		)
	}
})