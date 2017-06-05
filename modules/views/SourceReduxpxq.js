import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Sourcecontainer from './counterpxq/containers/Source-container'
import configureStore from './counterpxq/store/configureStore-store'

const store = configureStore()

export default React.createClass({
	render(){
		return(
			<Provider store={store}>
			    <Sourcecontainer />
			  </Provider>
			)
	}
})

