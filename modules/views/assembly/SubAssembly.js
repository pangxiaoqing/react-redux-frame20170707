import React from 'react'
import InputChange from './../../plugin/InputChange'
import SelectChange from './../../plugin/SelectChange'
import DidMount from './../../plugin/DidMount'
import Count from './../../plugin/Count'
import ReduxMount from './../../plugin/ReduxMount'
import ReduxA from './../../plugin/ReduxA'
import OpacityMount from './../../plugin/OpacityMount'
import ReduxDemo from './../../plugin/ReduxDemo'
import Component from './../../plugin/Component'


export default React.createClass({
	render() {
		let condition = this.props.params.name;
		let obj = {
			'inputChange': {
				'name': 'inputChange',
				'content': <InputChange />
			},
			'selectChange': {
				'name': 'selectChange',
				'content': <SelectChange />
			},
			'didmount': {
				'name': 'didmount',
				'content': <DidMount />
			},
			'count': {
				'name': 'count',
				'content': <Count />
			},
			'reduxmount': {
				'name': 'reduxmount',
				'content': <ReduxMount />
			},
			'reduxa': {
				'name': 'reduxa',
				'content': <ReduxA />
			},
			'opacitymount': {
				'name': 'opacitymount',
				'content': <OpacityMount />
			},
			'reduxdemo': {
				'name': 'reduxdemo',
				'content': <ReduxDemo />
			},
			'component': {
				'name': 'component',
				'content': <Component />
			}
		};
		let res = obj[condition]['content'];

		return (
			<div>	
				{ /*this.props.params.name == 'inputChange' ? <InputChange /> : ''*/}				
				{ res }				
			</div>
		)

	}
})