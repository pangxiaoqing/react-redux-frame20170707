import React from 'react'
import { createStore } from 'redux'
import { Provider , connect } from 'react-redux'

let Counter = React.createClass({
	render () {
		return (
			<div>
				<span>{ this.props.value }</span>
				<button type='button' onClick={ this.props.onIncreaseClick}>递增</button>
			</div>
		)
	}
})

//Action
const increaseAction = { type : 'increase'}

//Reducer
function counter ( state = { count : 0 } , action ){
	let count = state.count;
	let obj = {
		'increase' : { count : count + 1 }
	};
	let subobj = obj[action.type];
	if(subobj){
		return subobj
	}
	return state;
}

//Store
const store = createStore(counter)

function mapStateToProps (state) {
	return {
		value : state.count
	}
}

function mapDispatchToProps (dispatch) {
	return {
		onIncreaseClick : function(){
			dispatch(increaseAction)
		}
	}
}

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter)

export default React.createClass({
	render () {
		return (
			<div>
				<Provider store = { store }>
					<App />
				</Provider>
			</div>
		)
	}
})
