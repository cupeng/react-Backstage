import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Switch,Route,Link,Redirect } from 'react-router-dom'
import Layout from './components/Layout/index.jsx'
import Home from './container/Home/index.jsx'
import Login from './container/Login/index.jsx'
class App extends React.Component{
	render(){
		return (
			<Router>
				<Switch>
	                <Route path="/login" component={Login}/>
	                <Route path="/" component={Home} />
	            </Switch>
			</Router>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)