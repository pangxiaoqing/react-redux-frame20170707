/*pxq create 2017-6-2*/
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Sourcecontainer from './counterpxq/containers/Source-container2'
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

