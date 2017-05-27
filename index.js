import React from 'react'
import { render } from 'react-dom'
import { Router , Route , browserHistory , IndexRoute } from 'react-router'
import App from './modules/App'
import Home from './modules/Home'
import User from './modules/views/User'
import Invest from './modules/views/Invest'
import Assembly from './modules/views/Assembly'
import Revise from './modules/views/users/Revise'
import Info from './modules/views/invests/Info'
import SubAssembly from './modules/views/assembly/SubAssembly'
import Loginp from './modules/Loginp'
import Logincomponentp from './modules/views/Logincomponentp'
import CouterIndexpxq from './modules/views/CouterIndexpxq'

render ((
	<Router history={browserHistory} >
		<Route path='/' component={App} >
			<IndexRoute component={Home} />
			<Route path='/user' component={User} >
				<Route path='/user/:userName/:password' component={Revise} />
			</Route>
			<Route path='/invest' component={Invest} />
			<Route path='/info/:userName/:age' component={Info} />
			<Route path='/assembly' component={Assembly} >
				<Route path='/subAssembly/:name' component={SubAssembly} />
			</Route>
			<Route path='/loginp' component={Loginp} />
			<Route path='/logincomponentp' component={Logincomponentp} />
			<Route path='/CouterIndexpxq' component={CouterIndexpxq} />
		</Route>
	</Router>
),document.getElementById('app'))