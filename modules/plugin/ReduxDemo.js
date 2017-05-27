import React, {
	Component
} from 'react'
import {
	createStore
} from 'redux'

/*function todos(state = [], action) {
	switch (action.type) {
		case 'ADD_TODO':
			return state.concat([action.text]).concat([action.name])
		default:
			return state
	}
}

let store = createStore(todos, ['Use Redux'])

store.dispatch({
	type: 'ADD_TODO',
	text: 'Read the docs',
	name: 'pppppp'
})

console.log(store.getState())*/
/*function todos(state = [], action) {
	switch (action.type) {
		case 'ADD_TODO':
			return state.concat([action.text])
		default:
			return state
	}
}
let store = createStore(todos)

function addTodo(text) {
	return {
		type: 'ADD_TODO',
		text
	}
}

store.dispatch(addTodo('Read the docs'))
store.dispatch(addTodo('Read about the middleware'))

console.log(store.getState());*/



/*function addTodo(text) {
	return {
		type: 'ADD_TODO',
		text
	}
}

function addReducer(state, action) {
	state = state || [];
	if (action.type == 'ADD_TODO') {
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
		store.dispatch(addTodo(this.refs.todo.value))
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
})*/

const counter = function(state = 0, action) {
	switch (action.type) {
		case "INCREMENT":
			return state + 1
		case "DECREMENT":
			return state - 1
		default:
			return state
	}
}

const store = createStore(counter) //实例化，更新state，改变store中的state是要dispatch一个action

var count = React.createClass({
	getInitialState:function(){
		return {
			value:store.getState()
		}
	},
	onIncrement:function(){
		store.dispatch({
			type: 'INCREMENT'
		})
	},
	onDecrement:function(){
		store.dispatch({
			type: 'DECREMENT'
		})
	},
	componentDidMount:function(){
		store.subscribe(this.listener)
	},
	listener:function(){
		var newState = store.getState();
		this.setState({value:newState});
	},
	render:function(){
		return (
			<div>
				 Clicked: {this.state.value} times
				        {' '}
				 <button onClick={this.onIncrement}>+</button>
				        {' '}
				 <button onClick={this.onDecrement}>-</button>
			</div>
		)
	}
})

export default count;