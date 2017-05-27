import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Appcontainer from './counterpxq/containers/App-container'
import configureStore from './counterpxq/store/configureStore-store'

const store = configureStore()

export default React.createClass({
	render(){
		return(
			<Provider store={store}>
			    <Appcontainer />
			  </Provider>
			)
	}
})

