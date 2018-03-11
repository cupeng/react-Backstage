import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter,Switch,Route,Link,Redirect } from 'react-router-dom'
import Layout from './components/Layout/index.jsx'
import Home from './container/Home/index.jsx'
class App extends React.Component{
	render(){
		return (<BrowserRouter>
			<div>
				<Layout />
				<Route path='/' component={Home} />
				<Redirect from='*' to='/' />
			</div>
		</BrowserRouter>)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)