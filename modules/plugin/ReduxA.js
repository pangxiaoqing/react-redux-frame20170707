import React from 'react'
import {
	createStore
} from 'redux'

let addAction = function(txt) {
	return {
		type: 'add',
		text: txt
	}
}

let addReducer = function(state, action) {
	state = state || [];
	if (action.type == 'add') {
		state.push({
			text: action.text,
			completed: false
		})
	}
	return state;
}

let store = createStore(addReducer); //state;

let ViewPlugin = React.createClass({
	getInitialState() {
		return {
			items: store.getState()
		}
	},
	componentDidMount() {
		store.subscribe(this.onChange);
	},
	onChange() {
		this.setState({
			items: store.getState()
		})
	},
	handleAdd() {
		store.dispatch(addAction(this.refs.todo.value))
	},
	render() {
		return (
			<div>
				<input type='text' ref='todo' style={{marginRight:'10px'}} />
				<button type='button' onClick={this.handleAdd}>add</button>
				<ul>
					{
						this.state.items.map(function(item){
							return <li>{item.text}</li>
						})
					}
				</ul>
			</div>
		)
	}
})

export default ViewPlugin;