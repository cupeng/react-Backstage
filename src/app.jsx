import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter,Switch,Route,Link,Redirect } from 'react-router-dom'
import Layout from './components/Layout/index.jsx'
import Home from './container/Home/index.jsx'
import Login from './container/Login/index.jsx'
class App extends React.Component{
	render(){
		return (<BrowserRouter>
			<div>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/" render={props=>(
						<Layout>
							<Switch>	
								<Route axect path="/" component={Home} />
							</Switch>
						</Layout>
					)}/>
					
				</Switch>
			</div>
		</BrowserRouter>)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)