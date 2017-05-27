import React from 'react'
import NavLink from './../NavLink'

export default React.createClass({
	render() {
		return (
			<div>
				<ul>
					<li><NavLink to='/subAssembly/inputChange'>文本框改变事件</NavLink></li>
					<li><NavLink to='/subAssembly/selectChange'>下拉框改变事件</NavLink></li>
					<li><NavLink to='/subAssembly/didmount'>获取数据</NavLink></li>
					<li><NavLink to='/subAssembly/count'>计算</NavLink></li>
					<li><NavLink to='/subAssembly/reduxmount'>数据列表</NavLink></li>
					<li><NavLink to='/subAssembly/reduxa'>Redux实例(一)</NavLink></li>
					<li><NavLink to='/subAssembly/opacitymount'>数字增加，透明度变化</NavLink></li>
					<li><NavLink to='/subAssembly/reduxdemo'>ReduxDemo</NavLink></li>
					<li><NavLink to='/subAssembly/component'>练习组件间通信</NavLink></li>
				</ul>
				<div>{ this.props.children }</div>
			</div>
		)
	}
})