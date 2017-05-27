import React from 'react'

let Content = React.createClass({

	render() {
		return (
			<div>
				<h2 style={{opacity: this.props.op}} onClick={this.props.handleChangeProp}>点我，点击的次数为：{this.props.clickCountProp}</h2>
			</div>
		)
	}
})

export default React.createClass({
	getInitialState() {
		return {
			opacity: 1.0,
			clickCount: 0
		};
	},
	componentDidMount() {
		var self = this;
		console.log(this);
		console.log(self);
		self.timer = setInterval(function() {
			var opacity = self.state.opacity;
			opacity -= .05;
			if (opacity < 0.1) {
				opacity = 1.0;
			}
			self.setState({
				opacity: opacity
			});
		}.bind(self), 100);
	},
	handleChange() {
		this.setState({
			clickCount: this.state.clickCount + 1
		});
	},
	render() {
		return (
			<div>
		<Content op={this.state.opacity}  clickCountProp={this.state.clickCount} handleChangeProp={this.handleChange} />
			</div>
		)
	}
})