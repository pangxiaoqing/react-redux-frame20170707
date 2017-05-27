import React from 'react'
import NavLink from './NavLink'

const Loginp = React.createClass({
	getInitialState:function(){
		return{
			namep:'',
			passwordp:''
		}
	},
	handleClick:function(){
		const namep = this.refs.namep.value,
			passwordp = this.refs.passwordp.value
		this.setState({
			namep:namep,
			passwordp:passwordp
		})
	},
	render(){
		return(
			<div>
				<div className="loginp">
					<div>姓名：<input type="text" ref="namep" palceholder="请输入姓名" /></div>{' '}
					<div>密码：<input type="password" ref="passwordp" palceholder="请输入密码" /></div>{' '}
					<div><input type="button" className="buttonp" value="立即登录" onClick={this.handleClick} /><NavLink to="/">取消</NavLink></div>
					<div>
						<span>姓名：{this.state.namep}</span>{' '}
						<span>密码：{this.state.passwordp}</span>
					</div>
				</div>
			</div>
			)
	}
})

export default Loginp; 