import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
	render () {
		return (
			<div className='m-router'>
				<div className='m-r-left'>
					<ul>
						<li><NavLink to='/' onlyActiveOnIndex>首页</NavLink></li>
						<li><NavLink to='/user'>用户管理</NavLink></li>
						<li><NavLink to='/invest'>投资管理</NavLink></li>
						<li><NavLink to='/assembly'>组件管理</NavLink></li>
						<li><NavLink to='/loginp'>登录p</NavLink></li>
						<li><NavLink to='/logincomponentp'>登录组件p</NavLink></li>
						<li><NavLink to='/CouterIndexpxq'>react-redux的一个加减算数的案例pxq</NavLink></li>
						<li><NavLink to='/Sourcepxq'>两个按钮加载两个不同的url地址pxq</NavLink></li>
						<li><NavLink to='/SourceReduxpxq'>Redux三个按钮加载两个不同的url地址pxq</NavLink></li>
						<li><NavLink to='/SourceReduxpxq2'>Redux两个按钮加载两个不同的url地址pxq</NavLink></li>
					</ul>
				</div>
				<div className='m-r-right'>
					{ this.props.children }
				</div>
			</div>
		)
	}
})