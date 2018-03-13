import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter,Switch,Route,Link,Redirect } from 'react-router-dom'
import Layout from './components/Layout/index.jsx'
import Home from './container/Home/index.jsx'
import Login from './container/Login/index.jsx'
import Error from './container/404/index.jsx'
import User from './container/User/index.jsx'
import Product from './container/Product/index.jsx'
class App extends React.Component{
	render(){
		return (
			<BrowserRouter>
				<Switch>
	                <Route exact path="/" component={Home} />
	                <Route path="/login" component={Login} />
	                <Route path="/user" component={User} />
	                <Route path="/product" component={Product}/>
	                <Route component={Error} />
	            </Switch>
			</BrowserRouter>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)