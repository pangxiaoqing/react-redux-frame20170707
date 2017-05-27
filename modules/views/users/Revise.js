import React from 'react'

export default React.createClass({
	render () {
		return (
			<div>
				<p>
					<label>用户名：</label>
					<span>{ this.props.params.userName}</span>
				</p>
				<p>
					<label>密码：</label>
					<span>{ this.props.params.password}</span>
				</p>
			</div>
		)
	}
})